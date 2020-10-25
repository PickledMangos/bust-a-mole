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

  return (
      <div className="mole">
          <div className={`mole__hole${isHidden ? '-hidden' : '-show'}`} onClick={clickHandler}>
              <img src={isHidden ? moleHole : moleImage} 
                   alt='mole'
              ></img>
          </div>
      </div>
  );
};
