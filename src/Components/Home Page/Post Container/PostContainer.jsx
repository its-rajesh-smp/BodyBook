import React from 'react';
import "./PostContainer.css"
import Post from "../Post/Post"
function PostContainer(props) {
    return (
        <div className=' PostContainer-div '>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default PostContainer;
