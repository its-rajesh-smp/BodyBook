import React, { useState } from "react";
import "./CreateNewPost.css";
import CreateNewPostCard from "../Create New Post Card/CreateNewPostCard";
import { useSelector } from "react-redux";

function CreateNewPost(props) {
  const [isVissible, setIsVissible] = useState(false);
  const userDetails = useSelector((state) => state.authSlice.userData);
  // On Click Input Toggle CreateNewPostCard
  const onClickInput = () => {
    setIsVissible((p) => !p);
  };

  return (
    <div className=" CreateNewPost-div container">
      {isVissible && (
        <CreateNewPostCard
          userDetails={userDetails}
          setIsVissible={onClickInput}
        />
      )}
      <div className="CreateNewPost-div__input">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt=""
        />
        <input onClick={onClickInput} type="text" name="" id="" />
      </div>
      <div className="CreateNewPost-div__btnGrp">
        <button>Go Live</button>
        <button>Photo/video</button>
        <button>Feeling/activity</button>
      </div>
    </div>
  );
}

export default CreateNewPost;
