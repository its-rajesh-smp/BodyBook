import React from 'react';
import "./LikeCommentShareBTNGroup.css"

function LikeCommentShareBTNGroup(props) {
    return (
        <div className=' LikeCommentShareBTNGroup-div '>
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
        </div>
    );
}

export default LikeCommentShareBTNGroup;
