import React, { useEffect, useState } from 'react';
import { Mole } from "../Mole/Mole";
import './MainGameScreen.css';

export const MainGameScreen = (props) => {
  const maxMoleGenTime = 3000;
  const minMoleGenTime = 2500;
  const gameEndsInSeconds = 60;

  const [score, setScore] = props.score;
  const [isGameStart, setIsGameStart] = props.isActive;
  
  const [seconds, setSeconds] = useState(0);
  const [moleInterval, setMoleInterval] = useState(timeMoleGen(minMoleGenTime, maxMoleGenTime));
  const [gameBoard, setGameBoard] = useState(getAnArrayOfMoles(9));

  const [isTimeToMole, setIsTimeToMole] = useState(false);
  const [isMoleTimerRunning, setIsMoleTimerRunning] = useState(false);

  // function tick() {
  //   if (seconds % (moleInterval/1000) === 0 && seconds !== 0) {
  //     // Update moles
  //     const moles = getAnArrayOfMoles(9);
  //     setGameBoard(moles);

  //     // Update internal moles appear
  //     setMoleInterval(timeMoleGen(minMoleGenTime, maxMoleGenTime));

  //     // Reset gameboard and display, though this may be causing a memory leak
  //   }
  // }
  useEffect(() => {
    if (isTimeToMole) {
      console.log("It's time to mole!")
      setGameBoard(getAnArrayOfMoles(9))
      setMoleInterval(timeMoleGen(minMoleGenTime, maxMoleGenTime))
      console.log("mole interval is: ", moleInterval)
      setIsTimeToMole(false);
      setIsMoleTimerRunning(false);
    }
    if (!isMoleTimerRunning) {
      console.log("turning on mole timer...")
      setTimeout(setIsTimeToMole(true), moleInterval)
      setIsMoleTimerRunning(true)
    }

    return () => {
      setIsTimeToMole(false)
    }
  }, [isTimeToMole])
  
  useEffect(() => {

    let interval = null;
    
    if (seconds >= gameEndsInSeconds) {
      setIsGameStart(false);
    }

    // setTimeout(setGameBoard(getAnArrayOfMoles(9)), timeMoleGen(minMoleGenTime, maxMoleGenTime))
    interval = setInterval(() => {
      setSeconds(seconds => (seconds + 1));
      // tick();
    }, 1000)
    // if (seconds !== 0) {
    //   clearInterval(interval);
    // }
    return () => {
      clearInterval(interval)
    }
  }, [isGameStart, seconds]);

  function displayMoles() {
    return gameBoard.map((mole, key) => {
      return (
        <Mole 
          key={key} 
          index={key} 
          score={[score, setScore]} 
          timer={mole.timer} 
          isHidden={mole.isHidden} 
        /> 
      )});
  }

  return (
   <div className="MainGameScreen">
     <div>Seconds: {seconds}</div>
      <div className="game__field">
          {displayMoles()}
      </div>
   </div>
  );
};

function getAnArrayOfMoles (numOfHoles) {
  // console.log('getAnArrayOfMoles()');
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
  // console.log('pickAMoleToShow()');
  const min = Math.ceil(0);
  const max = Math.floor(totalMoles-1);
  let pickANumber = null; 
  while(pickANumber === null || pickANumber === excludedNumber) {
    pickANumber = Math.floor(Math.random() * (max - min + 1) + min);
  }
  return pickANumber;
}

function randomNumberGen (min, max) {
  // console.log('randomNumberGen()');
  const _min = Math.ceil(min);
  const _max = Math.floor(max);
  let pickANumber = null; 
  while(pickANumber === null) {
    pickANumber = Math.floor(Math.random() * (_max - _min + 1) + _min);
  }
  return pickANumber;
}

function timeMoleGen (minMoleGenTime, maxMoleGenTime) {
  // console.log('timeMoleGen()');
  const number = randomNumberGen(minMoleGenTime, maxMoleGenTime);
  return number;
}
