import React from "react";
import "./MessagePerson.css";
function MessagePerson(props) {
  // On Click Person Send Email to Massage Box To Fetch Particular Messages
  const onClickSendEmailhandeler = () => {
    props.setOnClickedFriend(props.data);
  };

  return (
    <div className=" MessagePerson-div ">
      <p onClick={onClickSendEmailhandeler}>{props.data}</p>
    </div>
  );
}

export default MessagePerson;
