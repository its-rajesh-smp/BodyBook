import React from "react";
import "./HeaderUserLinks.css";
import { ShowOnDesktop } from "../../../../Styles/media";
import { NavLink } from "react-router-dom";

function HeaderUserLinks(props) {
  return (
    <div className=" HeaderUserLinks-div ">
      <ShowOnDesktop>
        <NavLink to={"/messages"}>
          <div className="navLink">
            <i className="bx bxs-message-square-dots"></i>
          </div>
        </NavLink>

        <NavLink to={"/notification"}>
          <div className="navLink">
            <i className="bx bxs-bell "></i>
          </div>
        </NavLink>

        <NavLink to={"/"}>
          <div className="navLink">
            <i className="bx bxs-group"></i>
          </div>
        </NavLink>
      </ShowOnDesktop>

      <NavLink to={"/profile"}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt=""
        />
      </NavLink>
    </div>
  );
}

export default HeaderUserLinks;
