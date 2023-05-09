import React from 'react';
import "./FriendCircle.css"
import FriendContainer from '../../UI/FriendContainer/FriendContainer';

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




export default FriendCircle;
