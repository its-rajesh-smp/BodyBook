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
