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
      <img src={props.data.photo} alt="" />
      {props.data.active && <div className="activeFriend"></div>}
      <p>{props.data.name}</p>
      {props.typingStatus && (
        <div className="TypingStatus">
          <p>Typing</p>
          <i className="bx bx-dots-horizontal-rounded bx-tada"></i>
        </div>
      )}
    </div>
  );
}

export default Friend;
