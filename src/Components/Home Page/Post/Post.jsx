import React from 'react';
import "./Post.css"
import WhichUser from '../../UI/WhichUser/WhichUser';
import PostMassage from '../../UI/Post/Post Massage/PostMassage';
import PostImages from '../../UI/Post/Post Images/PostImages';
import PostBottomBar from '../../UI/Post/Post Bottom Bar/PostBottomBar';
import LikeCommentShareBTNGroup from '../../UI/Post/LikeCommentShareBTNGroup/LikeCommentShareBTNGrp';

function Post(props) {
    return (
        <div className=' Post-div container '>
            <WhichUser />
            <PostMassage />
            <PostImages />
            <PostBottomBar />
            <LikeCommentShareBTNGroup />
        </div>
    );
}

export default Post;
