import React, { useEffect, useState } from "react";
import "./FriendContainer.css";
import Friend from "../Friend/Friend";
import { onValue, ref } from "firebase/database";
import { database } from "../../../Firebase/firestore";
import { useSelector } from "react-redux";

export default function FriendContainer(props) {
  const myEmail = useSelector((state) => state.authSlice.userData.email);
  const heartBeat = useSelector((state) => state.heartBeatSlice.switch);
  const [allUsers, setAllUsers] = useState([]);

  // FETCH REALTIME USERS
  useEffect(() => {
    const userRef = ref(database, `users`);
    const removeEventFunction = onValue(userRef, (snapshot) => {
      const person = Object.values(snapshot.val());
      const activePerson = person.filter((person) => {
        const currentTime = new Date().getTime();
        const personsLastActivityTime = person.lastActive;
        if (
          currentTime - personsLastActivityTime <= 10000 &&
          person.email !== myEmail
        ) {
          return true;
        }
      });

      // Filter Myself
      setAllUsers(activePerson);
    });
    return () => {
      removeEventFunction();
    };
  }, []);

  return (
    <div className={`friendContainer`}>
      {allUsers.map((person) => {
        return <Friend key={Math.random()} data={person} />;
      })}
    </div>
  );
}
