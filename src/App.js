import React, { useState } from "react";
import StartGameScreen from "./components/StartGameScreen.jsx";
import './App.css';

function App() {

    const [isGameStart, setIsGameStart] = useState(false);

    function handleStartGame () {
        setIsGameStart(true);
        console.log("start game?")
        console.log(isGameStart)


    }

  return (
    <div className="App">
        <div className="StartGameButton" onClick={()=>handleStartGame()}>
            <StartGameScreen username="peeps" >
            </StartGameScreen>

        </div>
    </div>
  );
}

export default App;
