import React, { useState } from "react";
import "./LoginBox.css";
import { useDispatch } from "react-redux";
import { loginUserAct } from "../../../Store/Actions/authActions";

function LoginBox(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // On Login Btn Click
  const onClickLoginBtn = () => {
    const enteredInput = {
      email: email,
      password: password,
    };
    dispatch(loginUserAct(enteredInput));
  };

  return (
    <div className=" LoginBox-div container ">
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        name=""
        id=""
        placeholder="Enter Your Email"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        name=""
        id=""
        placeholder="Enter Your Password"
      />
      <button onClick={onClickLoginBtn} className="loginBtn">
        Login
      </button>
      <p>Forgotten password?</p>
      <div className="newAccBtn">
        <button onClick={props.switchlogin}>Create new account</button>
      </div>
    </div>
  );
}

export default LoginBox;
