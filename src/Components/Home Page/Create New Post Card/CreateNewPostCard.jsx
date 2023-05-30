import React, { useEffect, useState } from "react";
import "./CreateNewPostCard.css";
import BlurWrapper from "../../UI/BlurWrapper/BlurWrapper";
import WhichUser from "../../UI/WhichUser/WhichUser";
import NewPostTextField from "../../UI/NewPostTextField/NewPostTextField";
import { useDispatch } from "react-redux";
import { addNewPostAct } from "../../../Store/Actions/feedPostsActions";

function CreateNewPostCard(props) {
  const [postText, setPostText] = useState("");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const currentDate = new Date().toLocaleDateString();
  const [image, setImage] = useState(null);

  // ON POST BTN CLICK
  const onPostBtnHandeler = (e) => {
    if (!isLoading) {
      setIsLoading(true);
      dispatch(
        addNewPostAct(postText, image, props.setIsVissible, setIsLoading)
      );
    }
  };

  return (
    <BlurWrapper>
      <div className=" CreateNewPostCard-div container">
        <div className="CreateNewPostCard-div__topbar">
          <h1>Create Post</h1>
          <h1 onClick={props.setIsVissible}>X</h1>
        </div>
        <WhichUser date={currentDate} userDetails={props.userDetails} />

        <NewPostTextField setImage={setImage} setPostText={setPostText} />

        <button onClick={onPostBtnHandeler} className="postBTN">
          {isLoading ? <i className="bx bx-loader-circle bx-spin" /> : "POST"}
        </button>
      </div>
    </BlurWrapper>
  );
}

export default CreateNewPostCard;
