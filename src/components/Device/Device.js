import React from 'react';
import DeviceDetails from '../Details/DeviceDetails';

const Device = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <DeviceDetails price={props.price}></DeviceDetails>
        </div>
    );
};

export default Device;