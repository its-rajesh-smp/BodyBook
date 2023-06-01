import React, { useEffect, useState } from "react";
import "./MessagePage.css";
import { onChildAdded, onValue, ref } from "firebase/database";
import { database } from "../../Firebase/firestore";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import generateChatId from "../../Functions/generateChatId";
import Friend from "../../Components/UI/Friend/Friend";
import ChatBox from "../../Components/Message Page/Chat Box/ChatBox";
import NewChat from "../../Components/Message Page/NewChat/NewChat";

function MessagePage(props) {
  const selectedFriend = useSelector(
    (state) => state.selectedPersonMessageSlice.selectedUser
  );
  const navigate = useNavigate();

  const friendEmail = selectedFriend.email.replace(".", "").replace("@", "");

  const myEmail = useSelector((state) =>
    state.authSlice.userData.email.replace(".", "").replace("@", "")
  );

  // Generating Combined Id
  const combinedId = generateChatId(myEmail, friendEmail);

  const [loader, setLoader] = useState(true);
  const [userChats, setUserChats] = useState([]);

  // FETCH REALTIME FRIENDS CHATS
  useEffect(() => {
    if (selectedFriend.email === "") {
      navigate("/");
    }
    const userRef = ref(database, `Messages/${combinedId}`);
    const removeEventFunction = onValue(userRef, (snapshot) => {
      const personChatsObj = snapshot.val();

      const newPersonArr = personChatsObj
        ? Object.keys(personChatsObj).map((chatId) => {
            return { ...personChatsObj[chatId], id: chatId };
          })
        : [];

      setUserChats(newPersonArr);
      setLoader(false);
    });
    return () => {
      removeEventFunction();
    };
  }, []);

  return (
    <div className=" MessagePage-div pageContainer ">
      <Friend data={selectedFriend} />
      <ChatBox loader={loader} myEmail={myEmail} userChats={userChats} />
      <NewChat selectedFriend={selectedFriend} />
    </div>
  );
}

export default MessagePage;
