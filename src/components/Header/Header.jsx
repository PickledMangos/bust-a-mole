import React from 'react';
import './Header.css';

export const Header = (props) => {
  const { blah } = props.blah;
  console.log('blah? ', blah);
  return (
    <div className="Header">
      <div>Clock goes here... {`${blah}`}</div>
      <div>Score</div>
    </div>
  );
};
