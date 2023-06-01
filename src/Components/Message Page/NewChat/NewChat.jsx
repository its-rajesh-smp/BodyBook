import React, { useState } from "react";
import "./NewChat.css";
import { sendMessage } from "../../../Store/Actions/sendMessageActions";
import { useDispatch } from "react-redux";

function NewChat(props) {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  //   ON CLICK SEND MESSAGE
  const onClickMessageSend = (e) => {
    e.preventDefault();
    dispatch(sendMessage(props.selectedFriend, message, setMessage));
  };

  return (
    <form className=" NewChat-div ">
      <input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        type="text"
        placeholder="type here!"
      />

      <button onClick={onClickMessageSend}>{">"}</button>
    </form>
  );
}

export default NewChat;
