import React, { useEffect, useState } from "react";
import "./HomePage.css";
import PostContainer from "../../Components/Home Page/Post Container/PostContainer";
import { onChildAdded } from "firebase/database";
import { allPostsRef } from "../../Firebase/firestore";
import PostContainerSkeleton from "../../Skeleton/Skeleton";
function HomePage(props) {
  const [allPosts, setAllPosts] = useState([]);

  // FETCH REALTIME POSTS
  useEffect(() => {
    const removeEventFunction = onChildAdded(allPostsRef, (snapshot) => {
      const newPost = snapshot.val();
      const newPostObj = { ...newPost, id: snapshot.key };
      setAllPosts((p) => [newPostObj, ...p]);
    });
    return () => {
      removeEventFunction();
    };
  }, []);

  return (
    <div className=" HomePage-div pageContainer">
      {allPosts.length === 0 ? (
        <PostContainerSkeleton />
      ) : (
        <PostContainer isVisible={true} postsArr={allPosts} />
      )}
    </div>
  );
}

export default HomePage;
