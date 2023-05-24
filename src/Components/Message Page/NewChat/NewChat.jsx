import React, { useState } from "react";
import "./NewChat.css";
import { sendMessage } from "../../../Store/Actions/sendMessageActions";

function NewChat(props) {
  const friendEmail = props.friendEmail;
  const myEmail = props.myEmail;
  const [message, setMessage] = useState("");

  //   ON CLICK SEND MESSAGE
  const onClickMessageSend = (e) => {
    e.preventDefault();
    sendMessage(myEmail, friendEmail, message, setMessage);
  };

  return (
    <form className=" NewChat-div ">
      <input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        type="text"
        name=""
        id=""
        placeholder="type here!"
      />

      <button onClick={onClickMessageSend}>{">"}</button>
    </form>
  );
}

export default NewChat;
