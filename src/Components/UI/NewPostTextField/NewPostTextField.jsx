import React, { useState } from "react";
import "./NewPostTextField.css";

function NewPostTextField(props) {
  const [isSet, setIsSet] = useState(false);

  // On CHange Handeler
  const onChangeHandeler = (e) => {
    if (e.target.files.length === 0) {
      setIsSet(false);
      props.setImage(null);
    } else {
      setIsSet(true);
      props.setImage(e.target.files[0]);
    }
  };

  return (
    <div className=" NewPostTextField-div ">
      <textarea
        onChange={(e) => props.setPostText(e.target.value)}
        className="textArea"
        placeholder="What is going on your mind!"
      ></textarea>

      <div className={`addPhoto ${!isSet && "img_dragdrop"}`}>
        <input
          style={{ opacity: `${isSet ? "10" : "0"}` }}
          onChange={onChangeHandeler}
          type="file"
        ></input>
      </div>
    </div>
  );
}

export default NewPostTextField;
