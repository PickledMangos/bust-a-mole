import React from 'react';
import { Mole } from "../Mole/Mole";
import './MainGameScreen.css';

export const MainGameScreen = (props) => {
  const moles = gameInit(9);
  const showMoleIndex = pickAMoleToShow(moles.length);
  moles[showMoleIndex] = <Mole></Mole>;
  return (
   <div className="MainGameScreen">
     <div className="game__field">
       {moles.map(mole => {
         return mole;
       })}
     </div>
   </div>
  );
};

function gameInit (numOfHoles) {
  const molesArray = [];

  for (let i = 0; i < numOfHoles; i++) {
    molesArray.push(<Mole isHidden={true}></Mole>);
  }
  return molesArray;
}

function pickAMoleToShow(totalMoles) {
  const min = Math.ceil(0);
  const max = Math.floor(totalMoles-1);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
