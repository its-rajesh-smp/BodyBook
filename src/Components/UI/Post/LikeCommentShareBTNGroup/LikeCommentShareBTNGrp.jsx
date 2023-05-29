import React, { useState } from "react";
import "./LikeCommentShareBTNGroup.css";
import { onClickLikeAct } from "../../../../Store/Actions/feedLikeActions";

function LikeCommentShareBTNGroup(props) {
  /* -------------------------------------------------------------------------- */
  /*                               LIKE BTN CLICK                               */
  /* -------------------------------------------------------------------------- */
  const onLikeBtnClickHandeler = () => {
    onClickLikeAct(
      props.data.id,
      props.userEmail,
      props.data.email,
      props.isUserLiked
    );
  };

  /* -------------------------------------------------------------------------- */
  /*                            ON CLICK COMMENT BTN                            */
  /* -------------------------------------------------------------------------- */
  const onClickCommentBtnHandeler = () => {
    props.setShowComment((p) => !p);
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
      <button onClick={onClickCommentBtnHandeler}>Comment</button>
      <button>Share</button>
    </div>
  );
}

export default LikeCommentShareBTNGroup;
