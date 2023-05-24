import React from "react";
import "./Friend.css";
import { useNavigate } from "react-router-dom";

function Friend(props) {
  const navigate = useNavigate();
  const userEmail = props.data.email.replace(".", "").replace("@", "");
  // ON CLICK NAVIGATE TO USER PROFILE
  const onFriendClickNavigate = () => {
    navigate(`/profile/${userEmail}`);
  };

  return (
    <div onClick={onFriendClickNavigate} className=" Friend-div ">
      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
      <div className="activeFriend"></div>
      <p>{props.data.name}</p>
    </div>
  );
}

export default Friend;
