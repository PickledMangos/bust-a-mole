import React, { useState, useReducer } from "react";
import { Header } from './components/Header/Header.jsx';
import { StartGameScreen } from "./components/StartGameScreen/StartGameScreen.jsx";
import { MainGameScreen } from "./components/MainGameScreen/MainGameScreen.jsx";
import TimerContext from './components/Timer/Timer';
import './App.css';

function reducer (state, item) {
  return [...state, item]
}

function App() {

    const [isGameStart, setIsGameStart] = useState(false);
    const [score, setScore] = useState(0);

    const timer = { time: 0 }

    const handleStartGame = () => {
      if (!isGameStart) {
        setIsGameStart(true);
      }
    };

    const handleScoreKeeping = () => {
      setScore(score + 1);
    }

  return (
    <div className="App">
      <TimerContext.Provider value={timer}>
        <Header score={score} ></Header>
        <div className="StartGameButton" onClick={handleStartGame}> 
            {!isGameStart 
             ? <StartGameScreen /> 
             : <MainGameScreen 
                score={[score, setScore]}
                isActive={[isGameStart, setIsGameStart]}
              />}
        </div>
      </TimerContext.Provider>
    </div>
  );
}

export default App;
