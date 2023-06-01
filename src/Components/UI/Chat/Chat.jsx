import React from "react";
import "./Chat.css";

function Chat(props) {
  return (
    <div className={` Chat-div ${props.party}`}>
      <img src={props.autherImg} alt="" />
      {props.msg.includes("//h1") ? (
        <h1>{props.msg.replace("//h1", "")}</h1>
      ) : (
        <p>{props.msg}</p>
      )}
    </div>
  );
}

export default Chat;
