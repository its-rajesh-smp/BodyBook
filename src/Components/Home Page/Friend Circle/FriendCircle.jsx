import React, { useEffect, useState } from "react";
import "./FriendCircle.css";
import FriendContainer from "../../UI/FriendContainer/FriendContainer";
import { onValue, ref } from "firebase/database";
import { database } from "../../../Firebase/firestore";
import { useSelector } from "react-redux";

function FriendCircle(props) {
  const myEmail = useSelector((state) => state.authSlice.userData.email);
  const [activeUser, setactiveUser] = useState([]);
  const [inActiveUser, setInActiveUser] = useState([]);

  // FETCH REALTIME USERS
  useEffect(() => {
    const userRef = ref(database, `users`);
    const removeEventFunction = onValue(userRef, (snapshot) => {
      const person = Object.values(snapshot.val());

      const activeuserArr = [];
      const inActiveUserArr = [];

      person.forEach((person) => {
        const currentTime = new Date().getTime();
        const personsLastActivityTime = person.lastActive;
        if (person.email !== myEmail) {
          if (currentTime - personsLastActivityTime <= 10000) {
            activeuserArr.push({ ...person, active: true });
          } else {
            inActiveUserArr.push(person);
          }
        }
      });

      setactiveUser(activeuserArr);
      setInActiveUser(inActiveUserArr);
    });
    return () => {
      removeEventFunction();
    };
  }, []);

  return (
    <div className=" FriendCircle-div container ">
      <input type="text" placeholder="Find Friend" />
      <p className="FriendCircle__p">Active Peoples</p>
      <FriendContainer friendArr={activeUser} />
      <p className="FriendCircle__p">Inactive Peoples</p>
      <FriendContainer friendArr={inActiveUser} />
    </div>
  );
}

export default FriendCircle;
