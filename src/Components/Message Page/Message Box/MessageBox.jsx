import React, { useEffect, useState } from "react";
import "./MessageBox.css";
import Friend from "../../UI/Friend/Friend";
import ChatBox from "../Chat Box/ChatBox";
import NewChat from "../NewChat/NewChat";
import { onChildAdded, onValue, ref } from "firebase/database";
import { database } from "../../../Firebase/firestore";
import generateChatId from "../../../Functions/generateChatId";
import SelectAFriend from "../../UI/Message Page/Select A Friend/SelectAFriend";

function MessageBox(props) {
  const myFriendData = props.onClickedFriend;
  const myEmail = props.myEmail;
  const myFriendEmail = myFriendData
    ? myFriendData.email.replace(".", "").replace("@", "")
    : null;
  const combinedId = generateChatId(myEmail, myFriendEmail);

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
  }, [myFriendData]);

  return (
    <div className=" MessageBox-div container">
      {myFriendData ? (
        <>
          <Friend data={myFriendData} />
          <ChatBox myEmail={myEmail} chats={props.chats} />
          <NewChat myEmail={myEmail} myFriendData={myFriendData} />
        </>
      ) : (
        <SelectAFriend />
      )}
    </div>
  );
}

export default MessageBox;
