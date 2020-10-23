import React from 'react';
import './Mole.css';
import moleImage from './mole.png';

export const Mole = (props) => {
    // const { isHidden } = props;
    // const hidden = isHidden ? 'mole__hidden' : '';
    return (
        <div className="mole">
            <div className="mole__hole">
                {/*<img className={`mole__image ${hidden}`} src='mole.png'></img>*/}
                <img src={moleImage} alt='mole'></img>
            </div>
        </div>
    );
};
