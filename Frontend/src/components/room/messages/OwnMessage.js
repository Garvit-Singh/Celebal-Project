import React from 'react';
import { own } from './messages-style'

const OwnMessage = (props ) => {
    return (
        
        <div className="container-fluid d-flex flex-row-reverse mb-3 mt-1">
            <span className="position-relative bg-success text-light rounded p-2" style={own}>
                {props.message}
                <span className="position-absolute top-100 start-100 translate-middle badge bg-dark text-light rounded-pill">
                    {props.time}
                </span>
            </span>
            {/* <span style={own}>
                {props.message} at {props.time}
            </span> */}
        </div>
    );
};

export default OwnMessage;