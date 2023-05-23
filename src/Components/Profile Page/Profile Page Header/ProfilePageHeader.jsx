import React from "react";
import "./ProfilePageHeader.css";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../../Store/Reducer/authReducer";
import { useNavigate } from "react-router-dom";

function ProfilePageHeader(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // ON CLICK LOGOUT
  const onClickLogoutHandeler = () => {
    localStorage.clear("bodybook");
    navigate("/");
    dispatch(logOutUser());
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
        <button>Add Friend</button>
        <button>Send Message</button>
        <button onClick={onClickLogoutHandeler}>LogOut</button>
      </div>
    </div>
  );
}

export default ProfilePageHeader;
