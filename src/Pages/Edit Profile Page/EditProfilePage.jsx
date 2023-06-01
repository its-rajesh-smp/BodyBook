import React, { useState } from "react";
import "./EditProfilePage.css";
import { useDispatch, useSelector } from "react-redux";
import { editProfileAct } from "../../Store/Actions/authActions";
import InputDiv from "../../Components/UI/Edit Profile Page/Input Div/InputDiv";
import { useNavigate } from "react-router-dom";

function EditProfilePage(props) {
  const userData = useSelector((state) => state.authSlice.userData);

  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [phone, setPhone] = useState(userData.phone);
  const [dob, setDob] = useState(userData.dob);
  const [password, setPassword] = useState("******");
  const [photo, setPhoto] = useState(userData.photo);
  const [previewPhoto, setPreviewPhoto] = useState(userData.photo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  // On Click Cancle btn
  const onClickCancle = () => {
    navigate("/");
  };

  //   On Change Photo Showing in Display
  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
    setPreviewPhoto(URL.createObjectURL(selectedPhoto));
  };

  //On Click Apply Change Btn
  const applyChangebtnHandeler = () => {
    if (!loader) {
      setLoader(true);
      const inputObj = {
        name: name,
        phone: phone,
        dob: dob,
        photo: photo,
      };
      dispatch(editProfileAct(inputObj, password, setLoader, onClickCancle));
    }
  };

  return (
    <div className=" EditProfilePage-div pageContainer ">
      <div className="container">
        <p>Edit Your Profile</p>
      </div>

      <div className="EditProfilePage-div__conatienr">
        <div className="EditProfilePage-div__imgContainer  container">
          <img src={previewPhoto} alt="" />
          <div className="chooseProfileImg">
            <input type="file" onChange={handlePhotoChange} />
            <p>Choose from file</p>
          </div>
        </div>

        <div className="EditProfilePage-div__inputBox__container container">
          <InputDiv
            type="text"
            onChange={setName}
            value={name}
            placeHolder={"Your Name"}
          />
          <InputDiv
            type="text"
            onChange={setEmail}
            value={email}
            notAllow={true}
            placeHolder={"Your Email"}
          />
          <InputDiv
            type="text"
            onChange={setPhone}
            value={phone}
            placeHolder={"Your Phone"}
          />
          <InputDiv
            type="date"
            onChange={setDob}
            value={dob}
            placeHolder={"Your DOB"}
          />
          <InputDiv
            type="text"
            onChange={setPassword}
            value={password}
            placeHolder={"Your Password"}
          />
        </div>
      </div>

      <div className="container EditProfilePage-div__btnContainer">
        <p>* For now email cannot be changed</p>
        <div>
          <button onClick={applyChangebtnHandeler}>
            {loader ? (
              <i class="bx bx-loader-circle bx-spin"></i>
            ) : (
              "Apply Changes"
            )}
          </button>
          <button onClick={onClickCancle}>Cancle</button>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;
