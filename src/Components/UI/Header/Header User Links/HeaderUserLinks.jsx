import React from "react";
import "./HeaderUserLinks.css";
import { ShowOnDesktop } from "../../../../Styles/media";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function HeaderUserLinks(props) {
  // Navigate To My Profile
  const myemail = useSelector((state) =>
    state.authSlice.userData.email.replace(".", "").replace("@", "")
  );

  return (
    <div className=" HeaderUserLinks-div ">
      <ShowOnDesktop>
        <div className="navLink">
          <NavLink to={"/messages"}>
            <i className="bx bxs-message-square-dots"></i>
          </NavLink>
        </div>

        <div className="navLink">
          <NavLink to={"/notification"}>
            <i className="bx bxs-bell "></i>
          </NavLink>
        </div>

        <div className="navLink">
          <NavLink to={"/"}>
            <i className="bx bxs-group"></i>
          </NavLink>
        </div>
      </ShowOnDesktop>

      <NavLink to={`/profile/${myemail}`}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt=""
        />
      </NavLink>
    </div>
  );
}

export default HeaderUserLinks;
