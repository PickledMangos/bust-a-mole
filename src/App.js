import React, { useState } from "react";
import { Header } from './components/Header/Header.jsx';
import { StartGameScreen } from "./components/StartGameScreen/StartGameScreen.jsx";
import { MainGameScreen } from "./components/MainGameScreen/MainGameScreen.jsx";
import './App.css';

function App() {

    const [isGameStart, setIsGameStart] = useState(false);
    console.log('is game started?', isGameStart);

    const handleStartGame = () => {
        setIsGameStart(true);
    };

  return (
    <div className="App">
      <Header/>
        <div className="StartGameButton" onClick={handleStartGame}>
            {!isGameStart ? <StartGameScreen /> : <MainGameScreen />}
        </div>
    </div>
  );
}

export default App;
