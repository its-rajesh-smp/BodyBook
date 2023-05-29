import React from "react";
import "./CommentContainer.css";
import PostComment from "../Post Comment/PostComment";

function CommentContainer(props) {
  return (
    <div className=" CommentContainer-div container ">
      <PostComment />
      <PostComment />
      <PostComment />
      <PostComment />
      <PostComment />
      <PostComment />
      <PostComment />
      <PostComment />
      <PostComment />
      <PostComment />
    </div>
  );
}

export default CommentContainer;
