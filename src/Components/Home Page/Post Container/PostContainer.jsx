import React, { useEffect, useState } from "react";

import "./PostContainer.css";
import Post from "../Post/Post";
import CreateNewPost from "../Create New Post/CreateNewPost";
import { useSelector } from "react-redux";

function PostContainer(props) {
  const [filteredPost, setFilteredPost] = useState(props.postsArr);
  const searchValue = useSelector((state) => state.postSearchSlice.searchValue);

  // Search Whenever User Type Something
  useEffect(() => {
    const filteredPostArr = props.postsArr.filter((post) => {
      if (
        post.post
          .toLowerCase()
          .trim()
          .includes(searchValue.toLowerCase().trim())
      ) {
        return true;
      }
    });
    setFilteredPost(filteredPostArr);
  }, [props.postsArr, searchValue]);

  return (
    <div className=" PostContainer-div ">
      {props.isVisible && <CreateNewPost />}

      {filteredPost.map((post) => {
        return <Post key={post.id} postDetails={post} />;
      })}
    </div>
  );
}

export default PostContainer;
