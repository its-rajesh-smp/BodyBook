import React from 'react';
import "./CreateNewPost.css"

function CreateNewPost(props) {
    return (
        <div className=' CreateNewPost-div container'>
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
