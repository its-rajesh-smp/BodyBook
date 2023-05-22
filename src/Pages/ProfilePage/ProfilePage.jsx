import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import ProfilePageHeader from "../../Components/Profile Page/Profile Page Header/ProfilePageHeader";
import ProfileInfo from "../../Components/Profile Page/Profile Info/ProfileInfo";
import PostContainer from "../../Components/Home Page/Post Container/PostContainer";
import { onChildAdded, onValue, ref } from "firebase/database";
import { useSelector } from "react-redux";
import { database } from "../../Firebase/firestore";

function ProfilePage(props) {
  const [allPosts, setAllPosts] = useState([]);
  const userData = useSelector((state) => state.authSlice.userData);
  const userEmail = userData.email.replace(".", "").replace("@", "");

  // FETCH REALTIME POSTS
  useEffect(() => {
    const userRef = ref(database, `UserPosts/${userEmail}`);
    const unregister = onChildAdded(userRef, (snapshot) => {
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
    <div className=" ProfilePage-div pageContainer ">
      <ProfilePageHeader />
      <div className="ProfilePage-div__container">
        <ProfileInfo />
        <PostContainer postsArr={allPosts} />
      </div>
    </div>
  );
}

export default ProfilePage;
