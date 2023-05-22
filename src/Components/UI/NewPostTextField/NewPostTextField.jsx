import React from "react";
import "./NewPostTextField.css";

function NewPostTextField(props) {
  return (
    <div className=" NewPostTextField-div ">
      <textarea
        onChange={(e) => props.setPostText(e.target.value)}
        className="textArea"
        placeholder="What is going on your mind!"
      ></textarea>
      <div className="addPhoto">
        <p>Drag & Drop</p>
      </div>
    </div>
  );
}

export default NewPostTextField;
