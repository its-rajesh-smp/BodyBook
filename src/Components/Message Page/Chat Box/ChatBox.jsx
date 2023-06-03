import React, { useCallback, useEffect, useRef } from "react";
import "./ChatBox.css";
import Chat from "../../UI/Chat/Chat";
import { onChildChanged, onValue, ref } from "firebase/database";
import { database } from "../../../Firebase/firestore";

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

  const renderChats = useCallback(() => {
    return userChats.map((chat) => {
      // Choosing Who Sent SMS
      const chooseSide =
        chat.auther === props.myEmail ? "rightChat" : "leftChat";
      return (
        <Chat
          key={chat.id}
          autherImg={chat.autherPhoto}
          party={chooseSide}
          msg={chat.text}
        />
      );
    });
  }, [userChats, props.myEmail]);

  return (
    <div ref={scroll} className=" ChatBox-div container">
      {props.loader ? (
        <>
          <div className="iContainer">
            <i className="bx bx-loader-circle bx-spin" />
          </div>
        </>
      ) : userChats.length === 0 ? (
        <div className="noChatPresnet">
          <h1>No Chat Present</h1>
          <img
            src="https://cdn-icons-png.flaticon.com/512/8362/8362771.png"
            alt=""
          />
        </div>
      ) : (
        renderChats()
      )}
    </div>
  );
}

export default ChatBox;
