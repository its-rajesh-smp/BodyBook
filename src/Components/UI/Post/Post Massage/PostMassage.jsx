import React from "react";
import "./PostMassage.css";

function PostMassage(props) {
  return <div className=" PostMassage-div ">{props.postMessage}</div>;
}

export default PostMassage;
