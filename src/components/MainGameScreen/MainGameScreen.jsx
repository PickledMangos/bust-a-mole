import React, { useEffect, useState } from 'react';
import { Mole } from "../Mole/Mole";
import './MainGameScreen.css';

export const MainGameScreen = (props) => {
  const [score, setScore] = props.score;
  
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true)
  const [gameBoard, setGameBoard] = useState(getAnArrayOfMoles(9));

  const moleGenerationSecondsInterval = 2;
  const gameEndsInSeconds = 60;

  function tick() { 
    if (seconds % moleGenerationSecondsInterval === 0 && seconds !== 0) {
      const moles = getAnArrayOfMoles(9);
      setGameBoard(moles);
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

  const replayHandler = () => {
    window.location.reload(true);
  };

  return (
   <div className="MainGameScreen">
     <div className="MainGameScreen__Timer">Seconds: {seconds}</div>
     {!isActive ? 
      <div className="GameOver">
        <div>Game over, man...</div>
        <button className="GameOver__Button" onClick={replayHandler}>Play Again</button>
      </div>
        : "" 
      }
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
                />)}) 
          : ""
        }
      </div>
   </div>
  );
};

function getAnArrayOfMoles (numOfHoles) {
  const moleHidesInMilliseconds = 3000;
  const moleShown = {
    isHidden: false,
    timer: moleHidesInMilliseconds
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
