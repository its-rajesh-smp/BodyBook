import React from 'react';
import "./WhichUser.css"

function WhichUser(props) {
    return (
        <div className=' WhichUser-div '>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
            <div>
                <p className='which_userName'>Rajesh Singha Maha Patra</p>
                <p className='which_postDate'>20/20/2022</p>
            </div>
        </div>
    );
}

export default WhichUser;
