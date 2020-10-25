import React from 'react';
import { Mole } from "../Mole/Mole";
import './MainGameScreen.css';

export const MainGameScreen = (props) => {
  const [score, setScore] = props.score;
  const moles = getAnArrayOfMoles(9, [score, setScore]);

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

function getAnArrayOfMoles (numOfHoles, [score, setScore]) {
  const moleShown = <Mole score={[score, setScore]}></Mole>;
  const moleHidden = <Mole isHidden={true} score={[score, setScore]}></Mole>;
  const molesArray = [];
  const showMoleIndex = pickAMoleToShow(numOfHoles);
  for (let i = 0; i < numOfHoles; i++) {
    const mole = i === showMoleIndex ? moleShown : moleHidden;
    molesArray.push(mole);
  }
  return molesArray;
}

function pickAMoleToShow(totalMoles) {
  const min = Math.ceil(0);
  const max = Math.floor(totalMoles-1);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
