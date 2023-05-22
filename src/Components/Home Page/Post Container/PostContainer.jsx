import React from "react";
import "./PostContainer.css";
import Post from "../Post/Post";
import CreateNewPost from "../Create New Post/CreateNewPost";
import { useSelector } from "react-redux";
function PostContainer(props) {
  const allPosts = useSelector((state) => state.feedPostsSlice.feedPosts);
  return (
    <div className=" PostContainer-div ">
      <CreateNewPost />

      {allPosts.map((post) => {
        return <Post postDetails={post} />;
      })}
    </div>
  );
}

export default PostContainer;
