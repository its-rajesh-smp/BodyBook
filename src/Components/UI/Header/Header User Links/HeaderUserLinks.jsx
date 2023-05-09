import React from 'react';
import "./HeaderUserLinks.css"
import { ShowOnDesktop } from '../../../../Styles/media';

function HeaderUserLinks(props) {
    return (
        <div className=' HeaderUserLinks-div '>
            <ShowOnDesktop>
                <div className='navLink'>
                    <i className='bx bxs-message-square-dots'></i>
                </div>
                <div className='navLink'>
                    <i className='bx bxs-bell '></i>
                </div>
                <div className='navLink'>
                    <i className='bx bxs-group' ></i>
                </div>
            </ShowOnDesktop>

            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
        </div>
    );
}

export default HeaderUserLinks;
