import React, { useEffect, useState } from 'react';
import { Mole } from "../Mole/Mole";
import './MainGameScreen.css';

export const MainGameScreen = (props) => {
  const moleGenerationInterval = 5;
  const gameEndsInSeconds = 60;

  const [score, setScore] = props.score;
  
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true)
  const [moleInterval, setMoleInterval] = useState(getMoleInterval(moleGenerationInterval));
  const [gameBoard, setGameBoard] = useState(getAnArrayOfMoles(9));

  function tick() {
    if (seconds % moleInterval === 0 && seconds !== 0) {
      // Update moles
      const moles = getAnArrayOfMoles(9);
      setGameBoard(moles);

      // Update internal moles appear
      setMoleInterval(getMoleInterval(moleGenerationInterval));

      // Reset gameboard and display, though this may be causing a memory leak
      setIsActive(false);
      setIsActive(true);
    }
  }

  useEffect(() => {
    let interval = null;
    
    if (seconds >= gameEndsInSeconds) {
      setIsActive(false);
    }

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

function getMoleInterval(moleGenerationInterval) {
  const min = Math.ceil(0);
  const max = Math.floor(moleGenerationInterval);
  let pickANumber = null; 
  while(pickANumber === null) {
    pickANumber = Math.floor(Math.random() * (max - min + 1) + min);
  }
  console.log('mole appearing next is... ', pickANumber);
  return pickANumber
}
