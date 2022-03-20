import React from 'react';
import Dial from '../dial/Dial';

const Display = (props) => {
    return (
        <div style={{border: "2px solid purple", margin: '3px'}}>
            <h2>{props.name}</h2>
            <p>Price value: {props.step}</p>
            <Dial step={props.step}></Dial>
        </div>
    );
};

export default Display;