import React from 'react';
import "./HomePage.css"
import CreateNewPost from '../../Components/Home Page/Create New Post/CreateNewPost';
import CreateNewPostCard from '../../Components/Home Page/Create New Post Card/CreateNewPostCard';

function HomePage(props) {
    return (
        <div className=' HomePage-div pageContainer'>
            <CreateNewPost />
            <CreateNewPostCard />
        </div>
    );
}

export default HomePage;
