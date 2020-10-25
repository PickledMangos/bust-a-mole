import React from 'react';
import { Mole } from "../Mole/Mole";
import './MainGameScreen.css';

export const MainGameScreen = (props) => {
  const moles = [];
  moles.push(<Mole></Mole>);
  moles.push(<Mole isHidden={true}></Mole>);

    return (
     <div className="MainGameScreen">
       {moles.map(mole => {
         return mole;
       })}
     </div>
    );
};
