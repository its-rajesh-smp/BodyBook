import React from "react";

import "./PostContainer.css";
import Post from "../Post/Post";
import CreateNewPost from "../Create New Post/CreateNewPost";

function PostContainer(props) {
  return (
    <div className=" PostContainer-div ">
      <CreateNewPost />

      {props.postsArr.map((post) => {
        console.log(post);
        return <Post key={Math.random()} postDetails={post} />;
      })}
    </div>
  );
}

export default PostContainer;
