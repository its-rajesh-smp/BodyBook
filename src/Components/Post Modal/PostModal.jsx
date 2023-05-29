import React from "react";
import "./PostModal.css";
import WhichUser from "../UI/WhichUser/WhichUser";
import PostMassage from "../UI/Post/Post Massage/PostMassage";
import PostImages from "../UI/Post/Post Images/PostImages";
import PostBottomBar from "../UI/Post/Post Bottom Bar/PostBottomBar";
import CommentContainer from "../UI/Post Modal/Comment Container/CommentContainer";

function PostModal(props) {
  const onClickCloseBtn = () => {
    props.setShowComment((p) => !p);
  };

  return (
    <div className=" PostModal-div ">
      <div className=" PostModal-div__container ">
        <i onClick={onClickCloseBtn} className="bx bx-x"></i>
        <WhichUser date={props.data.date} userDetails={props.data} />

        {props.data.post !== "" && (
          <PostMassage postMessage={props.data.post} />
        )}

        {props.data.image && <PostImages data={props.data.image} />}

        <PostBottomBar totalLikes={props.totalLikes} />
      </div>
      <CommentContainer />
    </div>
  );
}

export default PostModal;
