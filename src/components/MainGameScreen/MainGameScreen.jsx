import React, { useEffect, useState } from 'react';
import { Mole } from "../Mole/Mole";
import './MainGameScreen.css';

export const MainGameScreen = (props) => {
  const [score, setScore] = props.score;
  
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true)
    const [moleInterval, setMoleInterval] = useState();
    const [gameBoard, setGameBoard] = useState(getAnArrayOfMoles(9));

  const moleGenerationInterval = 5;
  const gameEndsInSeconds = 60;

  function tick() { // every second, this function is called
    console.log("tick!");
    if (seconds % 5 === 0 && seconds != 0) {
      console.log('seconds divisible by 5: ', seconds);
      console.log('current gameboard (moles)', gameBoard);
      setGameBoard(getAnArrayOfMoles(9));
      console.log('updated? gameboard (moles)', gameBoard); // is updating, but not showing the update here
    }
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => (seconds + 1));
        tick();
      }, 1000)
    } else if ((!isActive && seconds !== 0)) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval)
    }
  }, [isActive, seconds]);

  return (
   <div className="MainGameScreen">
     <div>Seconds: {seconds}</div>
      <div className="game__field">
        {isActive 
          ? gameBoard.map((mole, key) => {
              return (
                <Mole 
                  key={key} 
                  index={key} 
                  score={[score, setScore]} 
                  timer={mole.timer} 
                  isHidden={mole.isHidden} 
                /> 
              )
          }
            ) // closes map 
              : "Game Over, man"
        }
      </div>
   </div>
  );
};

function getAnArrayOfMoles (numOfHoles) {
  const moleShown = {
    isHidden: false,
    timer: 3000
  };
  const moleHidden = {
    isHidden: true,
    timer: null
  };
  let molesArray = [];
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
