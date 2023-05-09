import React from 'react';
import "./Friend.css"

function Friend(props) {
    return (
        <div className=' Friend-div '>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
            <div className='activeFriend'></div>
            <p>Rajesh Singha Maha Patra</p>
        </div>
    );
}

export default Friend;
