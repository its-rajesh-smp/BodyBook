import React, { useEffect, useState } from "react";
import "./HomePage.css";
import PostContainer from "../../Components/Home Page/Post Container/PostContainer";
import FriendCircle from "../../Components/Home Page/Friend Circle/FriendCircle";
import { ShowOnDesktop } from "../../Styles/media";
import { onChildAdded } from "firebase/database";
import { allPostsRef } from "../../Firebase/firestore";

function HomePage(props) {
  const [allPosts, setAllPosts] = useState([]);

  // FETCH REALTIME POSTS
  useEffect(() => {
    const unregister = onChildAdded(allPostsRef, (snapshot) => {
      const newPost = snapshot.val();
      const newPostObj = { ...newPost, id: snapshot.key };
      setAllPosts((p) => [newPostObj, ...p]);
    });
    return () => {
      // Unregister the listener when the component unmounts
      // inside unregister we can get access a remove event listener function
      unregister();
    };
  }, []);

  return (
    <div className=" HomePage-div pageContainer">
      <PostContainer postsArr={allPosts} />
      <ShowOnDesktop>
        <FriendCircle />
      </ShowOnDesktop>
    </div>
  );
}

export default HomePage;
