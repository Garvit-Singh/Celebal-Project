import React from 'react';
import { Redirect, useParams } from 'react-router';

const Join = () => {
    const { roomId} = useParams();
    return (
        <Redirect to={`/room/${roomId}`} />
    );
};

export default Join;