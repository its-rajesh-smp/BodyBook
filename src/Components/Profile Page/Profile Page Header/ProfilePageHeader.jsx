import React, { useEffect, useState } from "react";
import "./ProfilePageHeader.css";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../../Store/Reducer/authReducer";
import { useNavigate } from "react-router-dom";
import {
  acceptFriendReq,
  removeFriend,
  sendFriendReq,
} from "../../../Store/Actions/friendReqActions";
import { database } from "../../../Firebase/firestore";
import { onValue, ref } from "firebase/database";
import { selectPerson } from "../../../Store/Reducer/selectedPersonMessageReducer";

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
  const [isSendedFriendRequest, setIsSendedFriendRequest] = useState(false);

  // Need To Accept The Friend Request
  const [isNeedToAcceptRequest, setIsNeedToAcceptRequest] = useState(false);

  // Is Both Are Friend
  const [isBothAreFriend, setIsBothAreFriend] = useState(false);

  // FEETCH REALTIME UPDATES
  useEffect(() => {
    const userRef = ref(database, `users/${friendEmail}/friends/${myEmail}`);
    const removeEventFunction = onValue(userRef, (snapshot) => {
      const friendStatus = snapshot.exportVal();
      if (friendStatus) {
        setIsSendedFriendRequest(friendStatus.getRequest);
        setIsNeedToAcceptRequest(friendStatus.requestSended);
        setIsBothAreFriend(friendStatus.accept);
      } else {
        setIsSendedFriendRequest(false);
        setIsNeedToAcceptRequest(false);
        setIsBothAreFriend(false);
      }
    });
    return () => {
      removeEventFunction();
    };
  }, []);

  // ON CLICK LOGOUT
  const onClickLogoutHandeler = () => {
    localStorage.clear("bodybook");
    navigate("/");
    dispatch(logOutUser());
  };

  // ON CLICK SEND FRIEND REQ
  const onClickSendFrienReq = () => {
    dispatch(sendFriendReq(friendEmail, myEmail, isSendedFriendRequest));
  };

  // ON CLICK ACCEPT FRIEND REQ
  const onAcceptFriendReq = () => {
    dispatch(acceptFriendReq(props.userData.email, props.userData.name));
  };

  // ON CLICK UNFRIEND BTN
  const onClickUnfriend = () => {
    removeFriend(friendEmail, myEmail);
  };

  // On Click Take him to send message
  const onClickSendMessage = () => {
    dispatch(selectPerson({ ...props.userData }));
    navigate(`/message/${friendEmail}`);
  };

  //On Click Edit Profile Btn Take user to edit page
  const onClickEditProfileBtn = () => {
    navigate("/editProfile");
  };

  return (
    <div className=" ProfilePageHeader-div container">
      <div className="leftSide">
        <div className="leftSide_img">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
          />
        </div>
        <div>
          <p className="profileName">
            <span>{props.userData.name}</span>
            <i onClick={onClickEditProfileBtn} className="bx bx-edit-alt"></i>
          </p>
          <p className="friendCount">129</p>
        </div>
      </div>

      <div className="rightSide">
        {myEmail !== friendEmail && (
          <>
            {!isNeedToAcceptRequest && !isBothAreFriend && (
              <button onClick={onClickSendFrienReq}>
                {isSendedFriendRequest ? "Request Sended" : "Add Friend"}
              </button>
            )}

            {isNeedToAcceptRequest && !isBothAreFriend && (
              <button onClick={onAcceptFriendReq}>ACCEPT</button>
            )}

            {isBothAreFriend && (
              <>
                <button onClick={onClickUnfriend}>Unfriend</button>
                <button onClick={onClickSendMessage}>Send Message</button>
              </>
            )}
          </>
        )}

        {myEmail === friendEmail && (
          <button onClick={onClickLogoutHandeler}>LogOut</button>
        )}
      </div>
    </div>
  );
}

export default ProfilePageHeader;
