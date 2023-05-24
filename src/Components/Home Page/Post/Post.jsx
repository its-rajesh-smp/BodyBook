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

function Post(props) {
  // User Email
  const userEmail = useSelector((state) =>
    state.authSlice.userData.email.replace(".", "").replace("@", "")
  );

  //is User Liked
  const [isUserLiked, setIsUserLiked] = useState(false);

  //TotalLikeCounter
  const [totalLikes, setTotalLikes] = useState(0);

  // FEETCH REALTIME UPDATES
  useEffect(() => {
    const userRef = ref(database, `AllPosts/${props.postDetails.id}/likes`);
    const removeEventFunction = onValue(userRef, (snapshot) => {
      const postData = snapshot.exportVal();
      // If Now Likes then set 0
      if (postData === null) {
        setIsUserLiked(false);
        setTotalLikes(0);
      } else {
        if (postData[userEmail]) {
          // if me liked that then showing the love
          setIsUserLiked(true);
        } else {
          // else showing not liked
          setIsUserLiked(false);
        }
        // Updating the total likes
        setTotalLikes(Object.keys(postData).length);
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

      <PostMassage postMessage={props.postDetails.post} />

      {props.postDetails.images && <PostImages />}

      <PostBottomBar totalLikes={totalLikes} />

      <LikeCommentShareBTNGroup
        userEmail={userEmail}
        isUserLiked={isUserLiked}
        data={props.postDetails}
      />
    </div>
  );
}

export default Post;
