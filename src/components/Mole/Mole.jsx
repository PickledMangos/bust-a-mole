import React, { useState } from 'react';
import './Mole.css';
import moleImage from './mole.png';
import moleHole from './oval.gif';

export const Mole = (props) => {
  const isHiddenInitialValue = props.isHidden || false;
  const [isHidden, setIsHidden] = useState(isHiddenInitialValue);
  const [score, setScore] = props.score;
  
  const clickHandler = () => {
    if (!isHidden) setScore(score + 1);
    setIsHidden(true);
  };

  const expireTimer = () => {
    setIsHidden(true);
  };

  setTimeout(expireTimer, props.timer)

  return (
      <div className="mole" >
          <div className={`mole__hole${isHidden ? '-hidden' : '-show'}`} onClick={clickHandler} >
              <img src={isHidden ? moleHole : moleImage} 
                   alt='mole'
                   draggable={false}
              ></img>
          </div>
      </div>
  );
};
