import React from "react";
import "./PostImages.css";

function PostImages(props) {
  return (
    <div className=" PostImages-div ">
      <img src={props.data} alt="" />
    </div>
  );
}

export default PostImages;
