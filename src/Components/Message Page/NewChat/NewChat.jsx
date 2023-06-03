import React, { useEffect, useRef, useState } from "react";
import "./NewChat.css";
import { sendMessage } from "../../../Store/Actions/sendMessageActions";
import { useDispatch } from "react-redux";
import { ref, update } from "firebase/database";
import { database } from "../../../Firebase/firestore";

function NewChat(props) {
  const [message, setMessage] = useState("");
  const myEmail = props.myEmail;
  const dispatch = useDispatch();

  let msgTimeout;

  //   ON CLICK SEND MESSAGE
  const onClickMessageSend = (e) => {
    e.preventDefault();
    // On Click Send Instently Update the Typing Status To False
    update(ref(database, `Messages/${props.combinedId}/typing`), {
      [myEmail]: false,
    });
    clearTimeout(msgTimeout);
    dispatch(sendMessage(props.selectedFriend, message, setMessage));
  };

  // Send Is Typing Something Status
  useEffect(() => {
    if (message.trim() !== "") {
      update(ref(database, `Messages/${props.combinedId}/typing`), {
        [myEmail]: true,
      });
    }

    msgTimeout = setTimeout(() => {
      update(ref(database, `Messages/${props.combinedId}/typing`), {
        [myEmail]: false,
      });
    }, 5000);

    return () => {
      clearTimeout(msgTimeout);
    };
  }, [message]);

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
