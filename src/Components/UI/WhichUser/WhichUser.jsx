import React from "react";
import "./WhichUser.css";

function WhichUser(props) {
  return (
    <div className=" WhichUser-div ">
      <img src={props.userDetails.photo} alt="" />
      <div>
        <p className="which_userName">{props.userDetails.name} </p>
        <p className="which_postDate">{props.date}</p>
      </div>
    </div>
  );
}

export default WhichUser;
