import React, { useRef } from 'react';
import { useParams } from 'react-router';

const Invite = () => {
    const { roomId } = useParams()
    const url = "http://localhost:3000/join/"

    const textAreaRef = useRef(null);

    const textareastyle = {
        border: "none",
        backgroundColor: "transparent",
        resize: "none",
        outline: "none",
        overflow: "hidden",
        color: "transparent",
        position: "absolute",
        zIndex: "-5"
    };
      
    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
    };

    return (
        <React.Fragment>
            <form>
                <textarea
                    readOnly 
                    cols="70"
                    rows="1"
                    ref={textAreaRef}
                    value={url+roomId}
                    style={textareastyle}
                />
            </form>
            <button className="btn btn-outline-light m-2" onClick={copyToClipboard}>
                Invite Link <i className="fas fa-copy"></i>
            </button>
        </React.Fragment>
    );
};

export default Invite;