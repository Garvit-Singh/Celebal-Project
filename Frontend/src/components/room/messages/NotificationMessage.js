import React from 'react';
import { notification } from './messages-style';

const NotificationMessage = (props) => {
    return (
        <div className="container-fluid d-flex justify-content-around mb-2">
            <span style={notification}>
                {props.message}
            </span>
        </div>
    );
};

export default NotificationMessage;