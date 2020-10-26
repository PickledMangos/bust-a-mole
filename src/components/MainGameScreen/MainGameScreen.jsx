import React, { useEffect } from 'react';
import { Mole } from "../Mole/Mole";
import './MainGameScreen.css';

export const MainGameScreen = (props) => {
  const [score, setScore] = props.score;
  let moles = getAnArrayOfMoles(9, [score, setScore]);
  // TODO: make timer work (ex. wait 5 seconds, then update moles
  // moles = getAnArrayOfMoles(9, [score, setScore]);

  return (
   <div className="MainGameScreen">
     <div className="game__field">
       {moles.map((mole, key) => {
        return <Mole key={key} index={key} score={[score, setScore]} timer={mole.timer} isHidden={mole.isHidden} />
       })}
     </div>
   </div>
  );
};

function getAnArrayOfMoles (numOfHoles, [score, setScore]) {
  const moleShown = {
    isHidden: false,
    timer: 3000
  };
  const moleHidden = {
    isHidden: true,
    timer: null
  };
  const molesArray = [];
  const showMoleIndex = pickAMoleToShow(numOfHoles);

  let nextShowMoleIndex = pickAMoleToShow(numOfHoles, showMoleIndex);

  for (let i = 0; i < numOfHoles; i++) {
    const mole = i === showMoleIndex ? moleShown : moleHidden;
    if (i === nextShowMoleIndex) {
      mole.timer = 5000;
    } 
    molesArray.push(mole);
  }
  return molesArray;
}

function pickAMoleToShow(totalMoles, excludedNumber) {
  const min = Math.ceil(0);
  const max = Math.floor(totalMoles-1);
  let pickANumber = null; 
  while(pickANumber === null || pickANumber === excludedNumber) {
    pickANumber = Math.floor(Math.random() * (max - min + 1) + min);
  }
  return pickANumber;
}
