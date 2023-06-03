import React, { useEffect, useState } from "react";
import "./MessagePage.css";
import { onValue, ref } from "firebase/database";
import { database } from "../../Firebase/firestore";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import generateChatId from "../../Functions/generateChatId";
import Friend from "../../Components/UI/Friend/Friend";
import ChatBox from "../../Components/Message Page/Chat Box/ChatBox";
import NewChat from "../../Components/Message Page/NewChat/NewChat";

function MessagePage(props) {
  const navigate = useNavigate();

  const selectedFriend = useSelector(
    (state) => state.selectedPersonMessageSlice.selectedUser
  );
  const friendEmail = selectedFriend.email.replace(".", "").replace("@", "");
  const myDetail = useSelector((state) => state.authSlice.userData);
  const myEmail = myDetail.email.replace(".", "").replace("@", "");
  // Generating Combined Id
  const combinedId = generateChatId(myEmail, friendEmail);

  const [loader, setLoader] = useState(true);
  const [userChats, setUserChats] = useState([]);
  const [typingStatus, setTypingStatus] = useState(false);

  // FETCH REALTIME FRIENDS CHATS
  useEffect(() => {
    if (selectedFriend.email === "") {
      navigate("/");
    }
    const userRef = ref(database, `Messages/${combinedId}/message`);
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

  // Render Is Typing Status
  useEffect(() => {
    const typingStatusRef = ref(
      database,
      `Messages/${combinedId}/typing/${friendEmail}`
    );
    const addEventListener = onValue(typingStatusRef, (snapshot) => {
      const status = snapshot.val();
      setTypingStatus(status);
    });
    return () => {
      addEventListener();
    };
  }, []);

  return (
    <div className=" MessagePage-div pageContainer ">
      <Friend typingStatus={typingStatus} data={selectedFriend} />
      <ChatBox
        combinedId={combinedId}
        loader={loader}
        myEmail={myEmail}
        friendEmail={friendEmail}
        userChats={userChats}
      />
      <NewChat
        myEmail={myEmail}
        combinedId={combinedId}
        selectedFriend={selectedFriend}
      />
    </div>
  );
}

export default MessagePage;
