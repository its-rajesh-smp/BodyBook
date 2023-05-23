import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import ProfilePageHeader from "../../Components/Profile Page/Profile Page Header/ProfilePageHeader";
import ProfileInfo from "../../Components/Profile Page/Profile Info/ProfileInfo";
import PostContainer from "../../Components/Home Page/Post Container/PostContainer";
import { onChildAdded, ref } from "firebase/database";
import { useSelector } from "react-redux";
import { database } from "../../Firebase/firestore";

function ProfilePage(props) {
  const [allPosts, setAllPosts] = useState([]);
  const userData = useSelector((state) => state.authSlice.userData);
  const userEmail = userData.email.replace(".", "").replace("@", "");

  // FETCH REALTIME POSTS
  useEffect(() => {
    const userRef = ref(database, `UserPosts/${userEmail}`);

    const removeEventFunction = onChildAdded(userRef, (snapshot) => {
      const newPost = snapshot.val();
      const newPostObj = { ...newPost, id: snapshot.key };
      setAllPosts((p) => [newPostObj, ...p]);
    });
    return () => {
      removeEventFunction();
    };
  }, []);

  return (
    <div className=" ProfilePage-div pageContainer ">
      <ProfilePageHeader userData={userData} />
      <div className="ProfilePage-div__container">
        <ProfileInfo userData={userData} />
        <PostContainer postsArr={allPosts} />
      </div>
    </div>
  );
}

export default ProfilePage;
