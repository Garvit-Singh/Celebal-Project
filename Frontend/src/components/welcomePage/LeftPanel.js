import React, {useState} from 'react';
import uuid from 'react-uuid'
import {Link} from 'react-router-dom'
import { mainPanel, info, infoContent} from './welcome-page';

const LeftPanel = () => {
    const [roomId, setRoomId] = useState(uuid());
    
    const makeNewRoomId = () => {
        setRoomId(uuid())
    }

    return (
        <div className="container col-md-6 border-end" 
            style={mainPanel}
        >
            {/* <Link to="/profile">
                <h3 className="display-2">Profile</h3>
            </Link> */}
            <section id="information-section">
            <div className="container">
                <div className="row">
                <div className="col">
                    <div className="p-0">
                    <h3 className="display-5" style={info}>
                        Secure chat conferencing for everyone
                    </h3>
                    <p style={infoContent}>
                        This is text messaging website. You are welcome to do group chats and 
                        plan your programs here.
                        Hope you enjoy your time and do not forget to share this with your friends.
                    </p>
                    <Link className="btn btn-outline-info" to={"/room/"+roomId} onClick={makeNewRoomId}>
                        Create Room
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* <Link className="btn btn-outline-warning" to={"/room/"+roomId} onClick={makeNewRoomId}>
                Create Room
            </Link> */}
            {/* <Link to="/join/:roomId">Join Room</Link> */}
        </div>
    );
};

export default LeftPanel;