import React from 'react';
import "./ProfilePageHeader.css"

function ProfilePageHeader(props) {
    return (
        <div className=' ProfilePageHeader-div container'>
            <div className='leftSide'>
                <div className='leftSide_img'>
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                    <i className='bx bx-edit-alt'></i>
                </div>
                <div>
                    <p className='profileName'><span>Rajesh Singha Maha Patra</span><i className='bx bx-edit-alt'></i></p>
                    <p className='friendCount'>129</p>
                </div>
            </div>
            <div className='rightSide'>
                <button>Add Friend</button>
                <button>Send Message</button>
            </div>
        </div>
    );
}

export default ProfilePageHeader;
