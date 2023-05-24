import React from "react";
import "./MessagePerson.css";
function MessagePerson(props) {
  return (
    <div className=" MessagePerson-div ">
      <p>{props.data}</p>
    </div>
  );
}

export default MessagePerson;
