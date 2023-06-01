import React from "react";
import "./MessagePerson.css";
import { useNavigate } from "react-router-dom";
function MessagePerson(props) {
  const navigate = useNavigate();
  const friendEmail = props.data.email;

  // On Click Person Send Email to Massage Box To Fetch Particular Messages
  const onClickSendEmailhandeler = () => {
    navigate(`/message/${friendEmail}`);
  };

  return (
    <div onClick={onClickSendEmailhandeler} className=" MessagePerson-div ">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
        alt=""
      />
      <p>{props.data.name}</p>
    </div>
  );
}

export default MessagePerson;
