import React, { useEffect, useState } from "react";
import "./FriendContainer.css";
import Friend from "../Friend/Friend";
import { onChildAdded, ref } from "firebase/database";
import { database } from "../../../Firebase/firestore";
import { useSelector } from "react-redux";

export default function FriendContainer(props) {
  const myEmail = useSelector((state) => state.authSlice.userData.email);
  const [allUsers, setAllUsers] = useState([]);

  // FETCH REALTIME USERS
  useEffect(() => {
    const userRef = ref(database, `users`);
    const removeEventFunction = onChildAdded(userRef, (snapshot) => {
      const person = snapshot.val();
      // Filter Myself
      setAllUsers((p) => {
        if (person.email === myEmail) {
          return p;
        }
        return [...p, person];
      });
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
