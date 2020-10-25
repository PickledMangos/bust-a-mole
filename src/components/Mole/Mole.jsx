import React, { useState } from 'react';
import './Mole.css';
import moleImage from './mole.png';
import moleHole from './oval.gif';

export const Mole = (props) => {
  const isHiddenInitialValue = props.isHidden || false;
  const [isHidden, setIsHidden] = useState(isHiddenInitialValue);
  const clickHandler = () => (setIsHidden(true));
  return (
      <div className="mole">
          <div className="mole__hole" onClick={clickHandler}>
              <img src={isHidden ? moleHole : moleImage} alt='mole'></img>
          </div>
      </div>
  );
};
