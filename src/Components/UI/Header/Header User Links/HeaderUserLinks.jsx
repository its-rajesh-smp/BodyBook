import React from "react";
import "./HeaderUserLinks.css";
import { ShowOnDesktop } from "../../../../Styles/media";
import { NavLink } from "react-router-dom";

function HeaderUserLinks(props) {
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
