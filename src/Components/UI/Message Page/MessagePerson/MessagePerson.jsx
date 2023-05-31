import React from "react";
import "./MessagePerson.css";
function MessagePerson(props) {
  // On Click Person Send Email to Massage Box To Fetch Particular Messages
  const onClickSendEmailhandeler = () => {
    props.setOnClickedFriend(props.data);
    props.setChats([]);
  };

  return (
    <div onClick={onClickSendEmailhandeler} className=" MessagePerson-div ">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
        alt=""
      />
      <p>{props.data}</p>
    </div>
  );
}

export default MessagePerson;
