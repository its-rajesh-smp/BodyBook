import React, { useEffect, useState } from "react";
import "./FriendContainer.css";
import Friend from "../Friend/Friend";

export default function FriendContainer(props) {
  return (
    <div className={`friendContainer`}>
      {props.friendArr.map((person) => {
        return <Friend key={person.name} data={person} />;
      })}
    </div>
  );
}
