import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import io from 'socket.io-client';
import Message from './messages/Message';
import Invite from './Invite';
import { roomStyle, chatWindow, groupChatStyle, titleStyle, roomUserStyle, userListStyle, inputStyle, emojiStyle } from './room-page';
import EmojiPicker from 'emoji-picker-react';
// import Emoji from './Emoji'
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
            // console.log(users)
            setUserList(users)
        })
        socket.current.on('notification', message => {
            // console.log('notification-', message)
            setMessages(prev => [...prev, message])
        })
        socket.current.on('message', message => {
            // console.log(messages)
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
        if(inputRef.current.value === "")
            return;
        const senderInfo = {
            userId: sub,
            roomId,
            userName: name,
            message: inputRef.current.value 
        }
        socket.current.emit('message', senderInfo)
        inputRef.current.value = ""
    }

    const [emojiShow, setEmojiShow]  = useState(false);
    
    const handleEmojiClick = (code, emojiObj) => {
        inputRef.current.value += emojiObj.emoji
        setEmojiShow(false)
    }

    const EnterSend = (e) => {
        if(e.key === "Enter")
            sendMessage();
    }

    return (
        <div id="roomComponent" className="container-fluid" style={roomStyle}>
            <Invite />
            {/* <UserProfile /> */}
            {/* ChatArea.js */}
            <div className="container bg-dark" style={chatWindow}>
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
                        <div id="groupChatComponent" className="col-md-9 border-start p-0 " style={groupChatStyle}> 
                            <h5 className="container-fluid p-3 sticky-top" style={titleStyle}>Group Chat</h5>
                            <React.Fragment>
                                {
                                    messages?.map( m => (
                                        <Message key={
                                            m.time+m.ms} sub={sub} msg={m} />
                                    ))
                                }
                            </React.Fragment>

                            {/* <Emoji /> */}

                            {
                                emojiShow ? <EmojiPicker style={emojiStyle} onEmojiClick={handleEmojiClick} /> : <React.Fragment />
                            }

                            <div ref={messagesEndRef} className="msg-bottom sticky-top">
                                <div className="input-group">
                                    <span className="btn m-0 pl-1" onClick={() => setEmojiShow(!emojiShow)}>
                                        <i className="far fa-grin-beam"></i>
                                    </span>

                                    <input className="form-control" style={inputStyle} onKeyPress={EnterSend} ref={inputRef} type='text' placeholder="write message..." />
                                    
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