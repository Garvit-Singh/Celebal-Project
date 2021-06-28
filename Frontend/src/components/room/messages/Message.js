import React from 'react';
import { NotificationMessage, OwnMessage, OthersMessage } from './Types'

const Message = ( props ) => {
    // console.log("in message", props)
    const isBot = (props.msg.userId === -1);
    const isUser = (props.msg.userId === props.sub)
    const msg = {
        message: props.msg.message,
        userName: props.msg.userName,
        time: props.msg.time
    }
    return (
        <React.Fragment>
            {
                isBot ? <NotificationMessage message ={msg.message} /> : (
                    isUser ? <OwnMessage message={msg.message} time={msg.time} /> : 
                        <OthersMessage message={msg.message} time={msg.time} sender={msg.userName}/>
                )
            }
        </React.Fragment>
    );
};

export default Message;