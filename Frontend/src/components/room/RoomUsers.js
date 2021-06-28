import React from 'react';

const RoomUsers = () => {
    
    const mystyle = {
        fontFamily: "Neue Plak W01 Light,sans-serif",
        fontSize: "20px"
    }

    return (
        <div className="col-4 border-end text-center">
            <div className="container-fluid" style={mystyle}>Users</div>
            
        </div>
    );
};

export default RoomUsers;