import React from 'react';

const StartGameScreen = (props) => {
    return(
        <div className="StartGameScreen" onClick={()=>(console.log("CLICK!"))}>
            <p>Hello, {props.username}</p>
            <p>Click to start</p>
        </div>
    )
}

export default StartGameScreen;