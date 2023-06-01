import React, { useEffect, useState } from "react";
import "./HeaderUserLinks.css";
import { ShowOnDesktop } from "../../../../Styles/media";
import { NavLink } from "react-router-dom";

function HeaderUserLinks(props) {
  const myEmail = props.userData.email.replace(".", "").replace("@", "");
  const myPhoto = props.userData.photo;

  return (
    <div className=" HeaderUserLinks-div ">
      <ShowOnDesktop>
        <div className="navLink">
          <NavLink to={"/myFriends"}>
            <i className="bx bxs-message-square-dots"></i>
          </NavLink>
        </div>

        <div className="navLink notificationBtn">
          <NavLink to={"/notification"}>
            <i className="bx bxs-bell "></i>
            {props.totalNotification !== 0 && <p>{props.totalNotification}</p>}
          </NavLink>
        </div>

        <div className="navLink">
          <NavLink to={"/findfriend"}>
            <i className="bx bxs-group"></i>
          </NavLink>
        </div>
      </ShowOnDesktop>
      <NavLink to={`/profile/${myEmail}`}>
        <img src={myPhoto} alt="" />
      </NavLink>
    </div>
  );
}

export default HeaderUserLinks;
