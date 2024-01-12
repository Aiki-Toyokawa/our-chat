// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

import './css/Header.css';

function Header() {
  return (
    <header className="Header-header">
      <p>われわれ Chat</p>
      <nav>
        <ul>
          <li><Link to="/chat">Chat</Link></li>
          <li><Link to="/Ground">Ground</Link></li>
          <li><Link to="/techstack">Stack</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;