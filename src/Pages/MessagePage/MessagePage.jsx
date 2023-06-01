import React, { useEffect, useState } from "react";
import "./MessagePage.css";
import { onChildAdded, ref } from "firebase/database";
import { database } from "../../Firebase/firestore";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import generateChatId from "../../Functions/generateChatId";
import Friend from "../../Components/UI/Friend/Friend";
import ChatBox from "../../Components/Message Page/Chat Box/ChatBox";
import NewChat from "../../Components/Message Page/NewChat/NewChat";

function MessagePage(props) {
  const selectedFriend = useSelector(
    (state) => state.selectedPersonMessageSlice
  );
  const navigate = useNavigate();

  const friendEmail = selectedFriend.email.replace(".", "").replace("@", "");

  const myEmail = useSelector((state) =>
    state.authSlice.userData.email.replace(".", "").replace("@", "")
  );

  const combinedId = generateChatId(myEmail, friendEmail);

  const [userChats, setUserChats] = useState([]);

  // FETCH REALTIME FRIENDS
  useEffect(() => {
    if (selectedFriend.email === "") {
      navigate("/");
    }
    const userRef = ref(database, `Messages/${combinedId}`);
    const removeEventFunction = onChildAdded(userRef, (snapshot) => {
      const personChats = snapshot.val();
      if (personChats) {
        setUserChats((p) => [...p, personChats]);
      }
    });
    return () => {
      removeEventFunction();
    };
  }, []);

  return (
    <div className=" MessagePage-div pageContainer ">
      <Friend data={selectedFriend} />
      <ChatBox myEmail={myEmail} userChats={userChats} />
      <NewChat myEmail={myEmail} friendEmail={friendEmail} />
    </div>
  );
}

export default MessagePage;
