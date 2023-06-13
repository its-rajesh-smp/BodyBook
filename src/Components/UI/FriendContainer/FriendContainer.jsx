import React, { useEffect, useState } from "react";
import "./FriendContainer.css";
import Friend from "../Friend/Friend";

export default function FriendContainer(props) {
  const [filtered, setFiltered] = useState(props.friendArr);

  // Whenever State Change Filter The Friend
  useEffect(() => {
    let filteredArr = props.friendArr.filter((friend) => {
      if (
        friend.name.toLowerCase().includes(props.search.toLowerCase().trim()) ||
        props.search.toLowerCase().trim() === ""
      ) {
        return true;
      }
    });
    setFiltered(filteredArr);
  }, [props.friendArr, props.search]);

  return (
    <div className={`friendContainer`}>
      {filtered.map((person) => {
        return <Friend key={person.email} data={person} />;
      })}
    </div>
  );
}
