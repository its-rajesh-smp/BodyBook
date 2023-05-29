import React from "react";
import "./PostBottomBar.css";

function PostBottomBar(props) {
  return (
    <div className=" PostBottomBar-div ">
      <p>{props.totalLikes}</p>
      <div>
        <p>
          <span>{props.totalComments}</span> comments
        </p>
        <p>
          <span>7</span> shares
        </p>
      </div>
    </div>
  );
}

export default PostBottomBar;
