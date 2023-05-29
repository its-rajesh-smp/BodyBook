import React, { useState } from "react";
import "./AddComment.css";
import { useDispatch } from "react-redux";
import { addCommentAct } from "../../../../Store/Actions/feedCommentActions";

function AddComment(props) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  // On Add Btn Click
  const onClickAddBtn = () => {
    dispatch(addCommentAct(message, props.data));
  };

  return (
    <div className=" AddComment-div ">
      <input
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        value={message}
        type="text"
        name=""
        id=""
      />

      <button onClick={onClickAddBtn}>ADD</button>
    </div>
  );
}

export default AddComment;
