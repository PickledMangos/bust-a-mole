import React, { useContext } from 'react';
import './Header.css';

import TimerContext from '../Timer/Timer';

export const Header = (props) => {
  const score = props.score;
  const timer = useContext(TimerContext)
  
  return (
    <div className="Header">
      <div>Timer: {timer.time}</div>
      <div>Score:  {`${score}`}</div>
    </div>
  );
};
