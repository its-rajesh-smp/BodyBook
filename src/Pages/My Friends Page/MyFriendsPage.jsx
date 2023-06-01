import React, { useEffect, useState } from "react";
import "./MyFriendsPage.css";
import { onValue, ref } from "firebase/database";
import { database } from "../../Firebase/firestore";
import { useSelector } from "react-redux";
import MessagePerson from "../../Components/UI/Message Page/MessagePerson/MessagePerson";

function MyFriendsPage(props) {
  const [loader, setLoader] = useState(true);
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
      setLoader(false);
    });
    return () => {
      removeEventFunction();
    };
  }, []);

  return (
    <div className=" MyFriendsPage-div container">
      {loader ? (
        <div className="iContainer">
          <i className="bx bx-loader-circle bx-spin" />
        </div>
      ) : (
        myFriends.map((friendObj) => {
          return (
            <MessagePerson
              key={friendObj.email}
              myEmail={myEmail}
              data={friendObj}
            />
          );
        })
      )}
    </div>
  );
}

export default MyFriendsPage;
