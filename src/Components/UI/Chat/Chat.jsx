import React from 'react';
import "./Chat.css"

function Chat(props) {
    return (
        <div className={` Chat-div ${props.party}`} >
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
            <p>{props.msg}</p>
        </div>
    );
}

export default Chat;
