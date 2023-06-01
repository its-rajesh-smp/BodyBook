import React from "react";
import "./PostMassage.css";

function PostMassage(props) {
  return (
    <div className=" PostMassage-div ">
      {props.postMessage.includes("//h1") ? (
        <h1>{props.postMessage.replace("//h1", "")}</h1>
      ) : (
        props.postMessage
      )}
    </div>
  );
}

export default PostMassage;
