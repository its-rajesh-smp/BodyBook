import React from "react";
import "./HeaderHambargar.css";
import { NavLink } from "react-router-dom";

function HeaderHambargar(props) {
  return (
    <div className=" HeaderHambargar-div ">
      <NavLink onClick={props.onClickShowHambargar} to={"/"}>
        <i className="bx bxs-home"></i>
      </NavLink>

      <NavLink onClick={props.onClickShowHambargar} to={"/myFriends"}>
        <i className="bx bxs-message-square-dots"></i>
      </NavLink>

      <NavLink onClick={props.onClickShowHambargar} to={"/notification"}>
        {props.totalNotification !== 0 && <p>{props.totalNotification}</p>}
        <i className="bx bxs-bell "></i>
      </NavLink>

      <NavLink onClick={props.onClickShowHambargar} to={"/findfriend"}>
        <i className="bx bxs-group"></i>
      </NavLink>
    </div>
  );
}

export default HeaderHambargar;
