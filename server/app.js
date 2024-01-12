// app.js (Expressサーバー)
const express = require('express');
const path = require('path');
const db = require('./db'); // データベースのインポート

const app = express();
app.use(express.json());

// Reactアプリケーションの静的ファイルを提供
app.use(express.static(path.join(__dirname, '../client/build')));

// メッセージを受け取るAPIエンドポイント
app.post('/api/messages', (req, res) => {
  const { message } = req.body;
  const query = "INSERT INTO messages (message) VALUES (?)";

  db.run(query, [message], (err) => {
    if (err) {
      res.status(500).send({ error: err.message });
      return;
    }
    res.status(200).send({ message: 'メッセージを受け取りました' });
  });
});

// メッセージ履歴を取得するAPIエンドポイント
app.get('/api/messages', (req, res) => {
  const query = "SELECT * FROM messages ORDER BY timestamp ASC";

  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).send({ error: err.message });
      return;
    }
    res.status(200).json(rows);
  });
  /* //空のメッセージ削除用
  db.run("DELETE FROM messages WHERE trim(message) = ''", (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("空のメッセージを削除しました");});
  */
});



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}\n http://localhost:${PORT}`);
});