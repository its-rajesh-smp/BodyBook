import React, { useState } from "react";
import "./SignUpCard.css";
import BlurWrapper from "../../UI/BlurWrapper/BlurWrapper";
import { useDispatch } from "react-redux";
import { createUserAct } from "../../../Store/Actions/authActions";
import { useNavigate } from "react-router-dom";

function SignUpCard(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setSetLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // On Create Account Btn Click
  const onClickBtnHandeler = (e) => {
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      const enteredInput = {
        name: firstName + " " + lastName,
        email: email,
        password: password,
      };
      dispatch(createUserAct(enteredInput, setIsLoading, navigate));
    }
  };

  return (
    <BlurWrapper>
      <div className=" SignUpCard-div container">
        <div>
          <h1>Sign UP</h1>
          <p>It's quick and easy</p>
        </div>
        <form>
          <div className="formInputDiv">
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              name=""
              id=""
              placeholder="First name"
            />
            <input
              onChange={(e) => setSetLastName(e.target.value)}
              type="text"
              name=""
              id=""
              placeholder="Last name"
            />
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="passwordEmailInput"
            type="text"
            placeholder="Email"
            name=""
            id=""
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="passwordEmailInput"
            type="password"
            placeholder="New password"
            name=""
            id=""
          />

          <div className="formOptionDiv">
            <p>Date of birth</p>
            <div className="formOptionDiv__div">
              <input type="date" />
            </div>
          </div>
          <div className="formRadioDiv">
            <p>Gender</p>
            <div className="formRadioDiv__div">
              <div>
                <label>Male</label>
                <input type="radio" name="gender" />
              </div>
              <div>
                <label>Femail</label>
                <input type="radio" name="gender" />
              </div>
              <div>
                <label>Custom</label>
                <input type="radio" name="gender" />
              </div>
            </div>
          </div>

          <div className="newAccBtn">
            <button onClick={onClickBtnHandeler}>
              {isLoading ? (
                <i className="bx bx-loader-circle bx-spin" />
              ) : (
                "Create new account"
              )}
            </button>
          </div>
          <p onClick={props.switchlogin} className="backtoLogin">
            Back To Login Page?
          </p>
        </form>
      </div>
    </BlurWrapper>
  );
}

export default SignUpCard;
