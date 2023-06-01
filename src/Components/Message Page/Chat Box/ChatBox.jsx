import React, { useEffect, useRef } from "react";
import "./ChatBox.css";
import Chat from "../../UI/Chat/Chat";

function ChatBox(props) {
  // If No Chat Present Then Showin Nothing
  const userChats = props.userChats;
  const scroll = useRef();

  // After Render All Chats Scroll To Bottom
  useEffect(() => {
    scroll.current.scrollTo({
      top: scroll.current.scrollHeight,
      behavior: "smooth",
    });
  }, [userChats]);

  return (
    <div ref={scroll} className=" ChatBox-div container">
      {props.loader ? (
        <>
          <div className="iContainer">
            <i className="bx bx-loader-circle bx-spin" />
          </div>
        </>
      ) : (
        userChats.map((chat) => {
          // Choosing Who Sended SMS
          const chooseSide =
            chat.auther === props.myEmail ? "rightChat" : "leftChat";
          return (
            <Chat key={Math.random()} party={chooseSide} msg={chat.text} />
          );
        })
      )}
    </div>
  );
}

export default ChatBox;
