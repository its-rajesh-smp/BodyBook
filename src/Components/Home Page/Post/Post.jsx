import React, { useEffect, useState } from "react";
import "./Post.css";
import WhichUser from "../../UI/WhichUser/WhichUser";
import PostMassage from "../../UI/Post/Post Massage/PostMassage";
import PostImages from "../../UI/Post/Post Images/PostImages";
import PostBottomBar from "../../UI/Post/Post Bottom Bar/PostBottomBar";
import LikeCommentShareBTNGroup from "../../UI/Post/LikeCommentShareBTNGroup/LikeCommentShareBTNGrp";
import { useSelector } from "react-redux";
import { onValue, ref } from "firebase/database";
import { database } from "../../../Firebase/firestore";
import PostModal from "../../Post Modal/PostModal";

function Post(props) {
  // User Email
  const userEmail = useSelector((state) =>
    state.authSlice.userData.email.replace(".", "").replace("@", "")
  );

  // Show Comment
  const [showComment, setShowComment] = useState(false);

  //is User Liked
  const [isUserLiked, setIsUserLiked] = useState(false);

  //TotalLikeCounter
  const [totalLikes, setTotalLikes] = useState(0);

  //TotalCommentCounter
  const [totalComments, setTotalComments] = useState(0);

  // FEETCH REALTIME UPDATES
  useEffect(() => {
    const userRef = ref(database, `AllPosts/${props.postDetails.id}`);
    const removeEventFunction = onValue(userRef, (snapshot) => {
      const postData = snapshot.val();
      const postLikes = postData.likes;
      const postComment = postData.comments;
      console.log(postComment);
      //! Setting Likes
      if (!postLikes) {
        // If No Likes then set 0
        setIsUserLiked(false);
        setTotalLikes(0);
      } else {
        if (postLikes[userEmail]) {
          // if me liked that then showing the love
          setIsUserLiked(true);
        } else {
          // else showing not liked
          setIsUserLiked(false);
        }
        // Updating the total likes
        setTotalLikes(Object.keys(postLikes).length);
      }
      //! Setting Comments
      if (!postComment) {
        setTotalComments(0);
      } else {
        setTotalComments(Object.keys(postComment).length);
      }
    });
    return () => {
      removeEventFunction();
    };
  }, []);

  return (
    <div className=" Post-div container ">
      <WhichUser
        date={props.postDetails.date}
        userDetails={props.postDetails}
      />

      {props.postDetails.post !== "" && (
        <PostMassage postMessage={props.postDetails.post} />
      )}

      {props.postDetails.image && <PostImages data={props.postDetails.image} />}

      <PostBottomBar totalLikes={totalLikes} totalComments={totalComments} />

      <LikeCommentShareBTNGroup
        userEmail={userEmail}
        isUserLiked={isUserLiked}
        data={props.postDetails}
        setShowComment={setShowComment}
      />

      {showComment && (
        <PostModal
          totalComments={totalComments}
          setShowComment={setShowComment}
          data={props.postDetails}
          totalLikes={totalLikes}
        />
      )}
    </div>
  );
}

export default Post;
