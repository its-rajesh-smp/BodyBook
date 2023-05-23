import React, { useEffect, useState } from "react";
import "./FriendContainer.css";
import Friend from "../Friend/Friend";
import { onChildAdded, ref } from "firebase/database";
import { database } from "../../../Firebase/firestore";

export default function FriendContainer(props) {
  const [allUsers, setAllUsers] = useState([]);
  // FETCH REALTIME POSTS
  useEffect(() => {
    const userRef = ref(database, `users`);
    const removeEventFunction = onChildAdded(userRef, (snapshot) => {
      const newPost = snapshot.val();
      console.log(newPost);
      setAllUsers((p) => {
        return [...p, newPost];
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
