import React from "react";
import "./PostComment.css";
import WhichUser from "../../WhichUser/WhichUser";

function PostComment(props) {
  const userDetails = { name: "rajesh" };

  return (
    <div className=" PostComment-div ">
      <WhichUser
        userDetails={{ name: props.data.email }}
        date={props.data.date}
      />
      <p>{props.data.message}</p>
    </div>
  );
}

export default PostComment;
