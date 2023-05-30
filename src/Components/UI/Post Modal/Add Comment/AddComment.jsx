import React, { useState } from "react";
import "./AddComment.css";
import { useDispatch } from "react-redux";
import { addCommentAct } from "../../../../Store/Actions/feedCommentActions";

function AddComment(props) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  // On Add Btn Click
  const onClickAddBtn = () => {
    if (!isLoader) {
      setIsLoader(true);
      dispatch(addCommentAct(message, props.data, setMessage, setIsLoader));
    }
  };

  return (
    <div className=" AddComment-div ">
      <input
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        value={message}
        type="text"
        placeholder="Add your comment"
      />

      <button onClick={onClickAddBtn}>
        {isLoader ? (
          <i className="bx bx-loader-circle bx-spin "></i>
        ) : (
          <i className="bx bx-message-square-dots"></i>
        )}
      </button>
    </div>
  );
}

export default AddComment;
