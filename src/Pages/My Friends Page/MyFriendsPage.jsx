import React, { useEffect, useState } from "react";
import "./MyFriendsPage.css";
import { onValue, ref } from "firebase/database";
import { database } from "../../Firebase/firestore";
import { useSelector } from "react-redux";
import MessagePerson from "../../Components/UI/Message Page/MessagePerson/MessagePerson";

function MyFriendsPage(props) {
  const myEmail = useSelector((state) =>
    state.authSlice.userData.email.replace(".", "").replace("@", "")
  );

  const [myFriends, setMyFriends] = useState([]);

  // FETCH REALTIME FRIENDS
  useEffect(() => {
    const userRef = ref(database, `users/${myEmail}/friends`);
    const removeEventFunction = onValue(userRef, (snapshot) => {
      const person = snapshot.val();
      if (!person || person.accept === false) {
        return;
      }
      const personArr = Object.values(person);
      // Filtering If Person is Really a friend or not
      const filtered = personArr.filter((personObj) => {
        return personObj.accept;
      });
      setMyFriends(filtered);
    });
    return () => {
      removeEventFunction();
    };
  }, []);

  return (
    <div className=" MyFriendsPage-div container">
      {myFriends.map((friendObj) => {
        return (
          <MessagePerson
            //   setChats={setChats}
            //   setOnClickedFriend={setOnClickedFriend}
            key={friendObj.email}
            myEmail={myEmail}
            data={friendObj}
          />
        );
      })}
    </div>
  );
}

export default MyFriendsPage;
