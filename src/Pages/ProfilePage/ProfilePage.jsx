import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import ProfilePageHeader from "../../Components/Profile Page/Profile Page Header/ProfilePageHeader";
import ProfileInfo from "../../Components/Profile Page/Profile Info/ProfileInfo";
import PostContainer from "../../Components/Home Page/Post Container/PostContainer";
import { onChildAdded, ref } from "firebase/database";
import { database } from "../../Firebase/firestore";
import axios from "axios";
import { USER } from "../../Firebase/API_URL";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProfilePageSkeleton } from "../../Skeleton/Skeleton";

function ProfilePage(props) {
  const [allPosts, setAllPosts] = useState([]);
  const [personData, setPersonData] = useState({});
  const [loader, setLoader] = useState(true);
  const myEmail = useSelector((state) =>
    state.authSlice.userData.email.replace(".", "").replace("@", "")
  );

  // FETCH PERSON
  const param = useParams();
  const userEmail = param.userEmail;
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(`${USER}/${userEmail}.json`);
      setPersonData(data);
      setLoader(false);
    };
    fetchUser();
    setAllPosts([]);
  }, [userEmail]);

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
  }, [userEmail]);

  if (loader) {
    return <ProfilePageSkeleton />;
  }

  return (
    <div className=" ProfilePage-div pageContainer ">
      <ProfilePageHeader userData={personData} />
      <div className="ProfilePage-div__container">
        <ProfileInfo userData={personData} />
        <PostContainer isVisible={myEmail === userEmail} postsArr={allPosts} />
      </div>
    </div>
  );
}

export default ProfilePage;
