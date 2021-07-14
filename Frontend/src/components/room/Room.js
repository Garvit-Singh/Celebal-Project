import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import io from 'socket.io-client';
import Message from './messages/Message';
import Invite from './Invite';
import { groupChatStyle, titleStyle, roomUserStyle, userListStyle, inputStyle } from './room-page';
// import UserProfile from './UserProfile';
// import RoomUsers from './RoomUsers'
// import GroupChat from './GroupChat'
// import ChatArea from './ChatArea';

const Room = () => {

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

    
    
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);


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
            {/* <UserProfile /> */}
            {/* ChatArea.js */}
            <div className="container-fluid bg-dark">
                    <div className="row">


                        {/* <RoomUsers /> */}
                        <div className="col-md-3 border-end" style={roomUserStyle}>
                            <h5 className="container-fluid sticky-top" style={titleStyle}>Users</h5>
                            <React.Fragment>
                                {
                                    userList.map( user => (
                                        <li style={userListStyle} key={user.userId}>{user.userName}</li>
                                    ))
                                }
                            </React.Fragment>
                        </div>



                        {/* GroupChat.js */}
                        <div className="col-md-9 border-start p-0" style={groupChatStyle}> 
                            <h5 className="container-fluid p-3 sticky-top" style={titleStyle}>Group Chat</h5>
                            <React.Fragment>
                                {
                                    messages?.map( m => (
                                        <Message key={m.time+m.ms} sub={sub} msg={m} />
                                    ))
                                }
                            </React.Fragment>

                            <div ref={messagesEndRef} className="msg-bottom sticky-top">
                                <div className="input-group">
                                    <input className="form-control" style={inputStyle} ref={inputRef} type='text' placeholder="write message..." />
                                    <div className="input-group-append" onClick={sendMessage}>
                                        <span className="input-group-text">
                                            <i className="fa fas fa-paper-plane"></i>
                                        </span>
                                    </div>
                                    {/* <button onClick={sendMessage}>Send</button> */}
                                </div>
                            </div>

                        </div>
                    </div>
                    
            </div>
            
        </div>
    );
};

export default Room;