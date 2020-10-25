import React from 'react';
import './Mole.css';
import moleImage from './mole.png';
import moleHole from './oval.gif';

export const Mole = (props) => {
    const { isHidden } = props;
    return (
        <div className="mole">
            <div className="mole__hole">
                <img src={isHidden ? moleHole : moleImage} alt='mole'></img>
            </div>
        </div>
    );
};
