import React from "react";
import "./PostContainer.css";
import Post from "../Post/Post";
import CreateNewPost from "../Create New Post/CreateNewPost";
function PostContainer(props) {
  return (
    <div className=" PostContainer-div ">
      <CreateNewPost />
    </div>
  );
}

export default PostContainer;
