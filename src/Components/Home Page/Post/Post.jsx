import React, { useState } from "react";
import "./Post.css";
import WhichUser from "../../UI/WhichUser/WhichUser";
import PostMassage from "../../UI/Post/Post Massage/PostMassage";
import PostImages from "../../UI/Post/Post Images/PostImages";
import PostBottomBar from "../../UI/Post/Post Bottom Bar/PostBottomBar";
import LikeCommentShareBTNGroup from "../../UI/Post/LikeCommentShareBTNGroup/LikeCommentShareBTNGrp";
import { useSelector } from "react-redux";

function Post(props) {
  // User Email
  const userEmail = useSelector((state) =>
    state.authSlice.userData.email.replace(".", "").replace("@", "")
  );

  //is User Liked
  const [isUserLiked, setIsUserLiked] = useState(
    props.postDetails.likes
      ? props.postDetails.likes[userEmail]
        ? true
        : false
      : false
  );

  //TotalLikeCounter
  const [totalLikes, setTotalLikes] = useState(
    props.postDetails.likes ? Object.keys(props.postDetails.likes).length : 0
  );

  return (
    <div className=" Post-div container ">
      <WhichUser
        date={props.postDetails.date}
        userDetails={props.postDetails}
      />

      <PostMassage postMessage={props.postDetails.post} />

      {props.postDetails.images && <PostImages />}

      <PostBottomBar totalLikes={totalLikes} />

      <LikeCommentShareBTNGroup
        setTotalLikes={setTotalLikes}
        userEmail={userEmail}
        isUserLiked={isUserLiked}
        setIsUserLiked={setIsUserLiked}
        data={props.postDetails}
      />
    </div>
  );
}

export default Post;
