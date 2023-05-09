import React from 'react';
import "./MessageBox.css"
import Friend from '../../UI/Friend/Friend';
import ChatBox from '../Chat Box/ChatBox';
import NewChat from '../NewChat/NewChat';

function MessageBox(props) {
    return (
        <div className=' MessageBox-div container'>

            <Friend />
            <ChatBox />
            <NewChat />
        </div>
    );
}

export default MessageBox;
