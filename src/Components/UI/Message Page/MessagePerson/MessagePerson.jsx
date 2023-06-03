import React, { useEffect, useState } from "react";
import "./MessagePerson.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectPerson } from "../../../../Store/Reducer/selectedPersonMessageReducer";
import { database } from "../../../../Firebase/firestore";
import { onValue, ref } from "firebase/database";
function MessagePerson(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const friendEmail = props.data.email.replace(".", "").replace("@", "");
  const myEmail = props.myEmail;
  const [newMessage, setNewMessage] = useState(0);
  // On Click Person Send Email to Massage Box To Fetch Particular Messages
  const onClickSendEmailhandeler = () => {
    dispatch(selectPerson(props.data));
    navigate(`/message/${friendEmail}`);
  };

  // Fetch Realtime Friend Seen-Unseen Messages
  useEffect(() => {
    const friendRef = ref(
      database,
      `users/${myEmail}/friends/${friendEmail}/newMessage`
    );
    const removeEventFunction = onValue(friendRef, (snapshot) => {
      const value = snapshot.val();
      if (value) {
        setNewMessage(value);
      }
    });

    return () => {
      removeEventFunction();
    };
  });

  return (
    <div onClick={onClickSendEmailhandeler} className=" MessagePerson-div ">
      <img src={props.data.photo} alt="" />
      <p>{props.data.name}</p>
      {newMessage !== 0 && <p className="newMessage">{newMessage}</p>}
    </div>
  );
}

export default MessagePerson;
