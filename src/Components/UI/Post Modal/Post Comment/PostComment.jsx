import React from "react";
import "./PostComment.css";
import WhichUser from "../../WhichUser/WhichUser";

function PostComment(props) {
  const userDetails = { name: "rajesh" };
  const date = new Date().toLocaleString();

  return (
    <div className=" PostComment-div ">
      <WhichUser userDetails={userDetails} date={date} />
      <p></p>
    </div>
  );
}

export default PostComment;
