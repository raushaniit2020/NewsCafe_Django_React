import React from 'react';
import './Newsreaction.css';

function Newsreactions({ Icon, title, color }) {
  return (
    <div className='newsreactions'>
      <Icon style={{ color: color }} />
      <h6>{title}</h6>
    </div>
  )
}

export default Newsreactions
