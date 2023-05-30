import React from "react";

import "./PostContainer.css";
import Post from "../Post/Post";
import CreateNewPost from "../Create New Post/CreateNewPost";

function PostContainer(props) {
  return (
    <div className=" PostContainer-div ">
      {props.isVisible && <CreateNewPost />}

      {props.postsArr.map((post) => {
        return <Post key={post.id} postDetails={post} />;
      })}
    </div>
  );
}

export default PostContainer;
