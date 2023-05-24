import React, { useEffect, useState } from "react";
import "./MessagePage.css";
import MessageBox from "../../Components/Message Page/Message Box/MessageBox";
import { ShowOnDesktop } from "../../Styles/media";
import MessagePerson from "../../Components/UI/Message Page/MessagePerson/MessagePerson";
import { onValue, ref } from "firebase/database";
import { database } from "../../Firebase/firestore";
import { useSelector } from "react-redux";

function MessagePage(props) {
  const myEmail = useSelector((state) =>
    state.authSlice.userData.email.replace(".", "").replace("@", "")
  );
  const [myFriends, setMyFriends] = useState([]);
  const [onClickedFriend, setOnClickedFriend] = useState("");

  // FETCH REALTIME FRIENDS
  useEffect(() => {
    const userRef = ref(database, `users/${myEmail}/friends`);
    const removeEventFunction = onValue(userRef, (snapshot) => {
      const person = snapshot.val();
      if (!person) {
        return;
      }
      setMyFriends(Object.keys(person));
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

      <MessageBox myEmail={myEmail} onClickedFriend={onClickedFriend} />
    </div>
  );
}

export default MessagePage;
