import React, { useState } from "react";
import "./ProfilePageHeader.css";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../../Store/Reducer/authReducer";
import { useNavigate } from "react-router-dom";
import { sendFriendReq } from "../../../Store/Actions/friendReqActions";

function ProfilePageHeader(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myEmail = useSelector((state) =>
    state.authSlice.userData.email.replace(".", "").replace("@", "")
  );

  const friendEmail = props.userData.email
    ? props.userData.email.replace(".", "").replace("@", "")
    : "";

  //Is I Send The Friend Request
  const [isSendedFriendRequest, setIsSendedFriendRequest] = useState(
    props.userData.getFriendRequest
      ? props.userData.getFriendRequest[myEmail]
      : false
  );

  // ON CLICK LOGOUT
  const onClickLogoutHandeler = () => {
    localStorage.clear("bodybook");
    navigate("/");
    dispatch(logOutUser());
  };

  // ON CLICK SEND FRIEND REQ
  const onClickSendFrienReq = () => {
    sendFriendReq(
      friendEmail,
      myEmail,
      isSendedFriendRequest,
      setIsSendedFriendRequest
    );
  };

  return (
    <div className=" ProfilePageHeader-div container">
      <div className="leftSide">
        <div className="leftSide_img">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
          />
          <i className="bx bx-edit-alt"></i>
        </div>
        <div>
          <p className="profileName">
            <span>{props.userData.name}</span>
            <i className="bx bx-edit-alt"></i>
          </p>
          <p className="friendCount">129</p>
        </div>
      </div>

      <div className="rightSide">
        {myEmail !== friendEmail && (
          <>
            <button onClick={onClickSendFrienReq}>
              {isSendedFriendRequest ? "Request Sended" : "Add Friend"}
            </button>
            <button>Send Message</button>
          </>
        )}

        <button onClick={onClickLogoutHandeler}>LogOut</button>
      </div>
    </div>
  );
}

export default ProfilePageHeader;
