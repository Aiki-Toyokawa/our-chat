// App.tsx
import React from 'react';
import './base.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header    from './components/Header';
import ChatPage  from './pages/ChatPage';
import TechStack from './pages/TechStack';
import Ground    from './pages/Ground';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/chat"      element={<ChatPage />} />
          <Route path="/techstack" element={<TechStack />} />
          <Route path="/ground"    element={<Ground />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;