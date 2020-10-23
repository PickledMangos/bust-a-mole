import React from 'react';

const StartGameScreen = (props) => {
    return(
        <div className="StartGameScreen" >
            <p>Hello, {props.username}</p>
            <p>Click to start</p>
        </div>
    )
}

export default StartGameScreen;