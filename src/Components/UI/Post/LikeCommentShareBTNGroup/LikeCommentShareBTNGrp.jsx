import React from "react";
import "./LikeCommentShareBTNGroup.css";
import { useDispatch } from "react-redux";
import { onClickLikeAct } from "../../../../Store/Actions/feedLikeActions";

function LikeCommentShareBTNGroup(props) {
  const dispatch = useDispatch();

  /* -------------------------------------------------------------------------- */
  /*                               LIKE BTN CLICK                               */
  /* -------------------------------------------------------------------------- */
  const onLikeBtnClickHandeler = () => {
    dispatch(onClickLikeAct(props.data.id));
  };

  return (
    <div className=" LikeCommentShareBTNGroup-div ">
      <button onClick={onLikeBtnClickHandeler}>
        {props.isUserLiked ? (
          <span style={{ color: "blue" }}>❤️</span>
        ) : (
          <span>Like</span>
        )}
      </button>
      <button>Comment</button>
      <button>Share</button>
    </div>
  );
}

export default LikeCommentShareBTNGroup;
