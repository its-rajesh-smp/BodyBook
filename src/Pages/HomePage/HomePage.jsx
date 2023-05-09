import React from 'react';
import "./HomePage.css"
import CreateNewPost from '../../Components/Home Page/Create New Post/CreateNewPost';

function HomePage(props) {
    return (
        <div className=' HomePage-div pageContainer'>
            <CreateNewPost />
        </div>
    );
}

export default HomePage;
