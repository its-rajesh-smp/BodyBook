import React from "react";
import "./MessagePerson.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectPerson } from "../../../../Store/Reducer/selectedPersonMessageReducer";
function MessagePerson(props) {
  const navigate = useNavigate();
  const friendEmail = props.data.email.replace(".", "").replace("@", "");
  const dispatch = useDispatch();

  // On Click Person Send Email to Massage Box To Fetch Particular Messages
  const onClickSendEmailhandeler = () => {
    dispatch(selectPerson(props.data));
    navigate(`/message/${friendEmail}`);
  };

  return (
    <div onClick={onClickSendEmailhandeler} className=" MessagePerson-div ">
      <img src={props.data.photo} alt="" />
      <p>{props.data.name}</p>
    </div>
  );
}

export default MessagePerson;
