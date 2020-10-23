import React, { useState } from 'react';
import './StartGameScreen.css';

export const StartGameScreen = () => {

    const [isGameStart, setIsGameStart] = useState(false);
    console.log('is game started?', isGameStart);

    const handleStartGame = () => {
        setIsGameStart(true);
    };

    return (
        <div className="StartGameScreen" onClick={handleStartGame}>
            <p>Click to start</p>
        </div>
    )
};
