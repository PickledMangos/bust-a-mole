import React, { useEffect, useState } from 'react';
import { Mole } from "../Mole/Mole";
import './MainGameScreen.css';

export const MainGameScreen = (props) => {
  const [score, setScore] = props.score;
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true)

  const [moleInterval, setMoleInterval] = useState();

  let moles = getAnArrayOfMoles(9, [score, setScore]);
  // TODO: make timer work (ex. wait 5 seconds, then update moles
  // moles = getAnArrayOfMoles(9, [score, setScore]);

  function toggle() { // basic toggle switch for pause / start
    setIsActive(!isActive);
  }

  function reset() { // add more functionality for game board reset
    setSeconds(0);
    setIsActive(false);
  }

  const moleGenerationInterval = 5;
  const gameEndsInSeconds = 60;
  // while (seconds < gameEndsInSeconds) {
    
  // }


  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => (seconds + 1));
      }, 1000)
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval)
    }
  }, [isActive, seconds])

  return (
   <div className="MainGameScreen">
     <div>Seconds: {seconds}</div>
      <div className="game__field">

        {seconds < gameEndsInSeconds ? 
        moles.map((mole, key) => {
          return <Mole key={key} index={key} score={[score, setScore]} timer={mole.timer} isHidden={mole.isHidden} />
        }) : "Game Over, man"}
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

  for (let i = 0; i < numOfHoles; i++) {
    const mole = i === showMoleIndex ? moleShown : moleHidden; 
    molesArray.push(mole);
  }
  return molesArray;
}

function pickAMoleToShow(totalMoles, excludedNumber = -1) {
  const min = Math.ceil(0);
  const max = Math.floor(totalMoles-1);
  let pickANumber = null; 
  while(pickANumber === null || pickANumber === excludedNumber) {
    pickANumber = Math.floor(Math.random() * (max - min + 1) + min);
  }
  return pickANumber;
}
