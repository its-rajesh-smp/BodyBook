import React from "react";
import "./CommentContainer.css";
import PostComment from "../Post Comment/PostComment";
import AddComment from "../Add Comment/AddComment";

function CommentContainer(props) {
  return (
    <div className=" CommentContainer-div ">
      <AddComment data={props.data} />

      {props.commentArr.map((comment) => {
        return <PostComment key={comment.commentId} data={comment} />;
      })}
    </div>
  );
}

export default CommentContainer;
