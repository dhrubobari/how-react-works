import React from 'react';
import Tablet from '../tablet/Tablet';

const Dial = (props) => {
    return (
        <div style={{border: '2px solid red', margin: '3px'}}>
            <h3>This is Dial</h3>
            <p>numbers: {props.step}</p>
            <Tablet></Tablet>
        </div>
    );
};

export default Dial;