import React, { useState } from "react";
import "./LoginPage.css";
import LoginBox from "../../Components/Login Page/LoginBox/LoginBox";
import SignUpCard from "../../Components/Login Page/SignUpCard/SignUpCard";

function LoginPage(props) {
  // Switch In Between Login & Create Acc
  const [isLogin, setIslogin] = useState(true);
  const switchlogin = () => {
    setIslogin((p) => !p);
  };

  return (
    <div className=" LoginPage-div ">
      <div className="LoginPage-div__logoContainer">
        <h1 className="logo">bodyBook</h1>
        <h2 className="logo_desc">
          Bodybook helps you connect and share with the people in your life.
        </h2>
      </div>

      {isLogin && <LoginBox switchlogin={switchlogin} />}

      {!isLogin && <SignUpCard switchlogin={switchlogin} />}
    </div>
  );
}

export default LoginPage;
