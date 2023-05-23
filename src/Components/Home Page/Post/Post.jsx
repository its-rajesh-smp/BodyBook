import React from "react";
import "./Post.css";
import WhichUser from "../../UI/WhichUser/WhichUser";
import PostMassage from "../../UI/Post/Post Massage/PostMassage";
import PostImages from "../../UI/Post/Post Images/PostImages";
import PostBottomBar from "../../UI/Post/Post Bottom Bar/PostBottomBar";
import LikeCommentShareBTNGroup from "../../UI/Post/LikeCommentShareBTNGroup/LikeCommentShareBTNGrp";
import { useSelector } from "react-redux";

function Post(props) {
  const selector = useSelector((state) => state.feedLikeSlice.feedLike);
  const isUserLiked = selector[props.postDetails.id] === props.postDetails.id;

  return (
    <div className=" Post-div container ">
      <WhichUser
        date={props.postDetails.date}
        userDetails={props.postDetails}
      />
      <PostMassage postMessage={props.postDetails.post} />
      {props.postDetails.images && <PostImages />}

      <PostBottomBar data={props.postDetails} />

      <LikeCommentShareBTNGroup
        isUserLiked={isUserLiked}
        data={props.postDetails}
      />
    </div>
  );
}

export default Post;
