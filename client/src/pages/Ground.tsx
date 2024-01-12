// Ground.tsx
import React from 'react';
import './css/Ground.css';
import bcc from '../assets/images/bcc.gif';
import trio from '../assets/images/trio.jpg';

function Ground(){
  return (
    <body className='ground-body'>
      <div className='ground-screen'>
        <text>404 not found</text>
        <img src={bcc} alt='not found' />
        <img src={trio} className='trio' alt='trio'/>
      </div>
      
      
    </body>
    
  )
}

export default Ground;