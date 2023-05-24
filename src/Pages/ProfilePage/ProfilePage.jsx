import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import ProfilePageHeader from "../../Components/Profile Page/Profile Page Header/ProfilePageHeader";
import ProfileInfo from "../../Components/Profile Page/Profile Info/ProfileInfo";
import PostContainer from "../../Components/Home Page/Post Container/PostContainer";
import { onChildAdded, ref } from "firebase/database";
import { useSelector } from "react-redux";
import { database } from "../../Firebase/firestore";
import axios from "axios";
import { USER } from "../../Firebase/API_URL";
import { useParams } from "react-router-dom";

function ProfilePage(props) {
  const [allPosts, setAllPosts] = useState([]);
  const [personData, setPersonData] = useState({});

  // FETCH PERSON
  const param = useParams();
  const userEmail = param.userEmail;
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(`${USER}/${userEmail}.json`);
      setPersonData(data);
    };
    fetchUser();
  }, []);

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
      <ProfilePageHeader userData={personData} />
      <div className="ProfilePage-div__container">
        <ProfileInfo userData={personData} />
        <PostContainer postsArr={allPosts} />
      </div>
    </div>
  );
}

export default ProfilePage;
