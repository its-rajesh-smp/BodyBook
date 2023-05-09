import React from 'react';
import "./HomePage.css"

import PostContainer from '../../Components/Home Page/Post Container/PostContainer';
import FriendCircle from '../../Components/Home Page/Friend Circle/FriendCircle';
import { ShowOnDesktop } from '../../Styles/media';

function HomePage(props) {
    return (
        <div className=' HomePage-div pageContainer'>
            <PostContainer />
            <ShowOnDesktop>
                <FriendCircle />
            </ShowOnDesktop>
        </div>
    );
}

export default HomePage;
