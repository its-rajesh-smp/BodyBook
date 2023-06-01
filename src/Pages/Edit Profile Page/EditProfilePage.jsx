import React, { useState } from "react";
import "./EditProfilePage.css";
import { useDispatch, useSelector } from "react-redux";
import { editProfileAct } from "../../Store/Actions/authActions";

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
  //   On Change Photo Showing in Display
  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
    setPreviewPhoto(URL.createObjectURL(selectedPhoto));
  };

  //On Click Apply Change Btn
  const applyChangebtnHandeler = () => {
    const inputObj = {
      name: name,
      phone: phone,
      dob: dob,
      photo: photo,
    };
    dispatch(editProfileAct(inputObj, password));
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
          <div className="input__div">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Your Name"
            />
            <i className="bx bxs-edit"></i>
          </div>

          <div className="input__div">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Your Email"
            />
            <i className="bx bxs-edit"></i>
          </div>

          <div className="input__div">
            <input
              onChange={(e) => setPhone(e.target.value)}
              defaultValue={phone}
              type="text"
              placeholder="Your Phone Number"
            />
            <i className="bx bxs-edit"></i>
          </div>

          <div className="input__div">
            <input
              onChange={(e) => setDob(e.target.value)}
              defaultValue={dob}
              type="date"
              placeholder="Your DOB"
            />
            <i className="bx bxs-edit"></i>
          </div>

          <div className="input__div">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="text"
              placeholder="Your Password"
            />
            <i className="bx bxs-edit"></i>
          </div>
        </div>
      </div>
      <div className="container EditProfilePage-div__btnContainer">
        <p>* For now email cannot be changed</p>
        <div>
          <button onClick={applyChangebtnHandeler}>Apply Changes</button>
          <button>Cancle</button>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;
