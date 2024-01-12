// ChatPage.tsx
import React, { useState, useEffect }  from 'react';
import './css/ChatPage.css';

type Message = {
  id: number;
  message: string;
  timestamp: string;
};

function ChatPage() {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() =>{
    const fetchMessage = async() => {
      try{
        const response = await fetch('/api/messages');
        if(!response.ok){
          throw new Error('メッセージの取得に失敗しました。');
        }
        const data = await response.json();
        setMessages(data.map((msg:Message) => msg.message));
      } catch (error) {
        console.error('エラー : ', error);
      }
    };

    fetchMessage();
  },[]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // メッセージが空の場合は何もしない
    if (!inputText.trim()) {
      return;
    }

    try {
      // バックエンドへのPOSTリクエスト
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputText })
      });
      
      if (!response.ok) {
        throw new Error('メッセージの送信に失敗しました');
      }
  
      setMessages(prev => [...prev, inputText]); // メッセージ配列に追加
      setInputText(''); // 入力フィールドをリセット
    } catch (error) {
      console.error('送信エラー:', error);
    }
  };


  return (
    <body className='chatpage-body'>
      <div className='chatpage-chat-screen'>
        {messages.map((message, index) => (
          <div className="message-box" key={index}>
            <p>{message}</p> 
          </div>
        ))}
      </div>

      <div className='chatpage-footer-wrap'>
        <form onSubmit={handleSubmit}>
          <input
          type="text"
          className='chatpage-text-input'
          value={inputText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
          />
          <button className='submit-button' type="submit">GO</button>
        </form>
      </div>
    </body>
  );
}

export default ChatPage;