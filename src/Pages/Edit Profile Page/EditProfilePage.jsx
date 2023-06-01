import React from "react";
import "./EditProfilePage.css";

function EditProfilePage(props) {
  return (
    <div className=" EditProfilePage-div pageContainer ">
      <div className="container">
        <p>Edit Your Profile</p>
      </div>

      <div className="EditProfilePage-div__conatienr">
        <div className="EditProfilePage-div__imgContainer  container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/bodybook-4ef51.appspot.com/o/postImages%2F1685608815450?alt=media&token=7c970fd9-c823-4205-b666-85a41f84c509"
            alt=""
          />
          <div className="chooseProfileImg">
            <input type="file" />
            <p>Choose from file</p>
          </div>
        </div>

        <div className="EditProfilePage-div__inputBox__container container">
          <div className="input__div">
            <input type="text" placeholder="Your Name" />
            <i className="bx bxs-edit"></i>
          </div>

          <div className="input__div">
            <input type="text" placeholder="Your Email" />
            <i className="bx bxs-edit"></i>
          </div>

          <div className="input__div">
            <input type="text" placeholder="Your Phone Number" />
            <i className="bx bxs-edit"></i>
          </div>

          <div className="input__div">
            <input type="date" placeholder="Your DOB" />
            <i className="bx bxs-edit"></i>
          </div>

          <div className="input__div">
            <input type="text" placeholder="Your Password" />
            <i className="bx bxs-edit"></i>
          </div>
        </div>
      </div>
      <div className="container EditProfilePage-div__btnContainer">
        <p>* For now email cannot be changed</p>
        <div>
          <button>Apply Changes</button>
          <button>Cancle</button>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;
