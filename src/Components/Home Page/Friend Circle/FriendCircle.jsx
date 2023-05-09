import React from 'react';
import "./FriendCircle.css"
import Friend from '../../UI/Friend/Friend';

function FriendCircle(props) {
    return (
        <div className='FriendCircle-div__wrapper'>
            <div className=' FriendCircle-div container '>
                <input type="text" placeholder='Search Your Bondhu 🔍' />
                <FriendContainer />
            </div>
        </div>
    );
}



function FriendContainer() {
    return (
        <div className='friendContainer'>
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
        </div>)
}

export default FriendCircle;
