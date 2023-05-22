import React from "react";
import "./CreateNewPostCard.css";
import BlurWrapper from "../../UI/BlurWrapper/BlurWrapper";
import WhichUser from "../../UI/WhichUser/WhichUser";
import NewPostTextField from "../../UI/NewPostTextField/NewPostTextField";

function CreateNewPostCard(props) {
  return (
    <BlurWrapper>
      <div className=" CreateNewPostCard-div container">
        <div className="CreateNewPostCard-div__topbar">
          <h1>Create Post</h1>
          <h1 onClick={props.setIsVissible}>X</h1>
        </div>
        <WhichUser userDetails={props.userDetails} />
        <NewPostTextField />
        <button className="postBTN">POST</button>
      </div>
    </BlurWrapper>
  );
}

export default CreateNewPostCard;
