import React from 'react';
import { Mole } from "../Mole/Mole";
import './MainGameScreen.css';

export const MainGameScreen = (props) => {
  const moles = gameInit(9);
  console.log(moles);
  console.log(moles.length);
    return (
     <div className="MainGameScreen">
       <div className="game__field">
         {moles.map(mole => {
           return mole;
         })}
       </div>
     </div>
    );
};

function gameInit (numOfHoles) {
  const molesArray = [];

  for (let i = 0; i < numOfHoles; i++) {
    molesArray.push(<Mole isHidden={true}></Mole>);
  }
  return molesArray;
}
