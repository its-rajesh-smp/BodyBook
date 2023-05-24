import React from "react";
import "./ChatBox.css";
import Chat from "../../UI/Chat/Chat";

function ChatBox(props) {
  // If No Chat Present Then Showin Nothing
  const chats = props.chats;
  if (chats.length === 0) {
    return;
  }

  return (
    <div className=" ChatBox-div container">
      {chats.map((chat) => {
        // Choosing Who Sended SMS
        const chooseSide =
          chat.auther === props.myEmail ? "rightChat" : "leftChat";

        return <Chat key={Math.random()} party={chooseSide} msg={chat.text} />;
      })}
    </div>
  );
}

export default ChatBox;
