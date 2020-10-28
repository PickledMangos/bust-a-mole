import React from 'react';
import './Header.css';

export const Header = (props) => {
  const score = props.score;
  
  return (
    <div className="Header">
      <div>Click on the mole to get a point.</div>
      <div>Game is over at 60 seconds</div>
      <div>Score: {`${score}`}</div>
    </div>
  );
};
