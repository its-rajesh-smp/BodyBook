import React from "react";
import "./CommentContainer.css";
import PostComment from "../Post Comment/PostComment";
import AddComment from "../Add Comment/AddComment";

function CommentContainer(props) {
  return (
    <div className=" CommentContainer-div ">
      <AddComment />
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
