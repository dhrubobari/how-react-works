import React, { useEffect, useState } from 'react';
import Display from '../display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0)

    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }

    useEffect( () => {
        console.log("Hello")
    }, [steps]) 

    return (
        <div style={{border: '2px solid green', margin: '3px'}}>
            <h2>This is my smart Watch</h2>
            <h3>My current steps: {steps}</h3>
            <button onClick={increaseSteps}>Increase</button>
            <Display name="Xiaomi" step={steps}></Display>
        </div>
    );
};

export default Watch;