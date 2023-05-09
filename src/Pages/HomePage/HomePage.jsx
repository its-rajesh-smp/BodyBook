import React from 'react';
import "./HomePage.css"
import CreateNewPost from '../../Components/Home Page/Create New Post/CreateNewPost';
import CreateNewPostCard from '../../Components/Home Page/Create New Post Card/CreateNewPostCard';
import PostContainer from '../../Components/Home Page/Post Container/PostContainer';

function HomePage(props) {
    return (
        <div className=' HomePage-div pageContainer'>
            <CreateNewPost />
            <CreateNewPostCard />
            <PostContainer />
        </div>
    );
}

export default HomePage;
