import React from 'react';
import './Header.css';

export const Header = (props) => {
  const score = props.score;
  
  return (
    <div className="Header">
      <div>Clock goes here...</div>
      <div>Score:  {`${score}`}</div>
    </div>
  );
};
