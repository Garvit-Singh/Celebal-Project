import React from 'react';
import { other } from './messages-style'

const OthersMessage = (props) => {
    return (
        
        <div className="container-fluid d-flex flex-row mb-3 mt-1">
            <span className="position-relative bg-secondary text-light rounded p-2" style={other}>
                <span className="badge text-light p-0 m-0">
                    {props.sender} 
                </span>
                <br></br>
                {props.message}
                <span class="position-absolute top-100 start-100 translate-middle badge bg-dark text-light rounded-pill">
                    {props.time}
                </span>
            </span>
            {/* <span style={own}>
                {props.message} at {props.time}
            </span> */}
        </div>
        // <div>
        //     {props.sender} said {props.message} at {props.time}
        // </div>
    );
};

export default OthersMessage;