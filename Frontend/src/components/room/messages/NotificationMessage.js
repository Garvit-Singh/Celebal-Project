import React from 'react';

const NotificationMessage = (props) => {
    return (
        <div>
            BOT SAID : {props.message}
        </div>
    );
};

export default NotificationMessage;