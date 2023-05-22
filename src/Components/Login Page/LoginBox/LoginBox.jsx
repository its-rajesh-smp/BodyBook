import React from "react";
import "./LoginBox.css";

function LoginBox(props) {
  return (
    <div className=" LoginBox-div container ">
      <input type="email" name="" id="" placeholder="Enter Your Email" />
      <input type="password" name="" id="" placeholder="Enter Your Password" />
      <button className="loginBtn">Login</button>
      <p>Forgotten password?</p>
      <div className="newAccBtn">
        <button>Create new account</button>
      </div>
    </div>
  );
}

export default LoginBox;
