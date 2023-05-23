import React from "react";
import "./PostBottomBar.css";

function PostBottomBar(props) {
  const totalPostLike = props.data.postLikes
    ? Object.keys(props.data.postLikes).length
    : 0;

  return (
    <div className=" PostBottomBar-div ">
      <p>{totalPostLike}</p>
      <div>
        <p>
          <span>7</span> comments
        </p>
        <p>
          <span>7</span> shares
        </p>
      </div>
    </div>
  );
}

export default PostBottomBar;
