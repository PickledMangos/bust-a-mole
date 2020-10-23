import React, { useState } from "react";
import { StartGameScreen } from "./components/StartGameScreen/StartGameScreen.jsx";
import './App.css';

function App() {

    const [isGameStart, setIsGameStart] = useState(false);
    console.log('is game started?', isGameStart);

    const handleStartGame = () => {
        setIsGameStart(true);
    };

  return (
    <div className="App">
        <div className="StartGameButton" onClick={handleStartGame}>
            <StartGameScreen>
            </StartGameScreen>
        </div>
    </div>
  );
}


export default App;
