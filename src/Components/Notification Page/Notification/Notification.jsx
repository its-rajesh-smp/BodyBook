import React from "react";
import "./Notification.css";
const notificationMessageType = {
  "FRIEND REQUEST": "Send You Friend Request",
  "FRIEND REQUEST ACCEPT": "Accept Your Friend Request",
};

function Notification(props) {
  const name = props.data.person;
  const type = notificationMessageType[props.data.type];
  return (
    <div className=" Notification-div container ">
      <p>
        <span>{name}</span> <span>{type}</span>
      </p>
    </div>
  );
}

export default Notification;
