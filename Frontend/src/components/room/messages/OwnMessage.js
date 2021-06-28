import React from 'react';

const OwnMessage = (props ) => {
    return (
        <div>
            You said {props.message} at {props.time}
        </div>
    );
};

export default OwnMessage;