import React, { useEffect, useState } from "react";
import "./MessageBox.css";
import Friend from "../../UI/Friend/Friend";
import ChatBox from "../Chat Box/ChatBox";
import NewChat from "../NewChat/NewChat";
import { onChildAdded, onValue, ref } from "firebase/database";
import { database } from "../../../Firebase/firestore";
import generateChatId from "../../../Functions/generateChatId";

function MessageBox(props) {
  const friendEmail = props.onClickedFriend;
  const myEmail = props.myEmail;
  const combinedId = generateChatId(myEmail, friendEmail);

  // FETCH REALTIME FRIENDS
  useEffect(() => {
    const userRef = ref(database, `Messages/${combinedId}`);
    const removeEventFunction = onChildAdded(userRef, (snapshot) => {
      const person = snapshot.val();
      if (person) {
        props.setChats((p) => [...p, person]);
      }
    });
    return () => {
      removeEventFunction();
    };
  }, [friendEmail]);

  return (
    <div className=" MessageBox-div container">
      {friendEmail ? (
        <>
          <Friend data={{ email: friendEmail }} />
          <ChatBox myEmail={myEmail} chats={props.chats} />
          <NewChat myEmail={myEmail} friendEmail={friendEmail} />
        </>
      ) : (
        <h1>SELECT ONE FRIEND</h1>
      )}
    </div>
  );
}

export default MessageBox;
