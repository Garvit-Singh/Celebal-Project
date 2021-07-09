import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import io from 'socket.io-client';
import UserProfile from './UserProfile';
import Message from './messages/Message';
import Invite from './Invite';
// import RoomUsers from './RoomUsers'
// import GroupChat from './GroupChat'
// import ChatArea from './ChatArea';

const Room = () => {

    const mystyle = {
        fontFamily: "Neue Plak W01 Light,sans-serif",
        fontSize: "20px"
    }

    const { roomId } = useParams()
    const { user } = useAuth0()
    const { name, sub } = user           // can also get email from here 

    const socket = useRef()
    const inputRef = useRef()
    const [messages, setMessages] = useState([])
    const [userList, setUserList] = useState([])

    useEffect(() => {
        socket.current = io("http://localhost:3001")
    }, [])

    useEffect(() => {
        const userInfo = {
            userId: sub,
            roomId,
            userName: name
        }
        socket.current.emit('join room', userInfo)
        socket.current.on('user list', users => {
            console.log(users)
            setUserList(users)
        })
        socket.current.on('notification', message => {
            console.log('notification-', message)
            setMessages(prev => [...prev, message])
        })
        socket.current.on('message', message => {
            console.log(messages)
            setMessages(prev => [...prev, message])
        })
    }, [])

    const sendMessage = () => {
        const senderInfo = {
            userId: sub,
            roomId,
            userName: name,
            message: inputRef.current.value 
        }
        socket.current.emit('message', senderInfo)
        inputRef.current.value = ""
    }

    return (
        <div className="container">
            <Invite />
            <UserProfile />
            {/* ChatArea.js */}
            <div className="container-fluid">
                <div className="container-fluid mt-5">
                    <div className="row">
                        {/* <RoomUsers /> */}
                        <div className="col-4 border-end text-center">
                            <div className="container-fluid" style={mystyle}>Users</div>
                            <React.Fragment>
                                {
                                    userList.map( user => (
                                        <li key={user.userId}>{user.userName}</li>
                                    ))
                                }
                            </React.Fragment>
                        </div>
                        {/* GroupChat.js */}
                        <div className="col-8 border-start text-center"> 
                            <div className="container-fluid" style={mystyle}>Group Chat</div>
                            <React.Fragment>
                                {
                                    messages?.map( m => (
                                        <Message key={m.time+m.ms} sub={sub} msg={m} />
                                    ))
                                }
                            </React.Fragment>
                        </div>
                    </div>
                </div>
            </div>
            
            <input ref={inputRef} type='text' />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Room;