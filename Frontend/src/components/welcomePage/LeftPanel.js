import React, {useState} from 'react';
import uuid from 'react-uuid'
import {Link} from 'react-router-dom'

const LeftPanel = () => {
    const [roomId, setRoomId] = useState(uuid());
    
    const makeNewRoomId = () => {
        setRoomId(uuid())
    }

    return (
        <div className="col-5 border-end text-center">
            Left Panel
            <br></br>
            <Link to="/profile">Profile</Link>
            <br></br>
            <Link to={"/room/"+roomId} onClick={makeNewRoomId}>Create Room</Link>
            <br></br>
            {/* <Link to="/join/:roomId">Join Room</Link> */}
        </div>
    );
};

export default LeftPanel;