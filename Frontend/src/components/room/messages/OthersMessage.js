import React from 'react';

const OthersMessage = (props) => {
    return (
        <div>
            {props.sender} said {props.message} at {props.time}
        </div>
    );
};

export default OthersMessage;