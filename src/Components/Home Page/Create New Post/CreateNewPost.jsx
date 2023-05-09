import React from 'react';
import "./CreateNewPost.css"
import CreateNewPostCard from '../Create New Post Card/CreateNewPostCard';

function CreateNewPost(props) {
    return (
        <div className=' CreateNewPost-div container'>
            {/* <CreateNewPostCard /> */}
            <div className='CreateNewPost-div__input'>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                <input type="text" name="" id="" />
            </div>
            <div className='CreateNewPost-div__btnGrp'>
                <button>Go Live</button>
                <button>Photo/video</button>
                <button>Feeling/activity</button>
            </div>
        </div>
    );
}

export default CreateNewPost;
