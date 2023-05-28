import React, { useEffect, useState } from "react";
import "./MessagePage.css";
import MessageBox from "../../Components/Message Page/Message Box/MessageBox";
import { ShowOnDesktop } from "../../Styles/media";
import MessagePerson from "../../Components/UI/Message Page/MessagePerson/MessagePerson";
import { onChildAdded, onChildChanged, onValue, ref } from "firebase/database";
import { database } from "../../Firebase/firestore";
import { useSelector } from "react-redux";

function MessagePage(props) {
  const myEmail = useSelector((state) =>
    state.authSlice.userData.email.replace(".", "").replace("@", "")
  );
  const [myFriends, setMyFriends] = useState([]);
  const [onClickedFriend, setOnClickedFriend] = useState("");
  // We have to clear the chats wehen we changed our friend thats why i have taken this chat state here
  const [chats, setChats] = useState([]);

  // FETCH REALTIME FRIENDS
  useEffect(() => {
    const userRef = ref(database, `users/${myEmail}/friends`);
    const removeEventFunction = onValue(userRef, (snapshot) => {
      const person = snapshot.val();
      if (!person || person.accept === false) {
        return;
      }

      // Filtering If Person is Really a friend or not
      const filtered = Object.keys(person).filter((personObj) => {
        return person[personObj].accept;
      });
      setMyFriends(filtered);
    });
    return () => {
      removeEventFunction();
    };
  }, []);

  return (
    <div className=" MessagePage-div pageContainer ">
      <ShowOnDesktop>
        <div>
          <div className="container MessagePage-div__friendContainer">
            {myFriends.map((friendName) => {
              return (
                <MessagePerson
                  setChats={setChats}
                  setOnClickedFriend={setOnClickedFriend}
                  key={Math.random()}
                  myEmail={myEmail}
                  data={friendName}
                />
              );
            })}
          </div>
        </div>
      </ShowOnDesktop>

      <MessageBox
        myEmail={myEmail}
        setChats={setChats}
        chats={chats}
        onClickedFriend={onClickedFriend}
      />
    </div>
  );
}

export default MessagePage;
