import React from "react";
import "./SignUpCard.css";
import BlurWrapper from "../../UI/BlurWrapper/BlurWrapper";

function SignUpCard(props) {
  return (
    <BlurWrapper>
      <div className=" SignUpCard-div container">
        <div>
          <h1>Sign UP</h1>
          <p>It's quick and easy</p>
        </div>
        <form>
          <div className="formInputDiv">
            <input type="text" name="" id="" placeholder="First name" />
            <input type="text" name="" id="" placeholder="Last name" />
          </div>
          <input
            className="mobileEmailInput"
            type="text"
            placeholder="Email"
            name=""
            id=""
          />
          <input
            className="mobileEmailInput"
            type="text"
            placeholder="New password"
            name=""
            id=""
          />

          <div className="formOptionDiv">
            <p>Date of birth</p>
            <div className="formOptionDiv__div">
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
              </select>
              <select name="" id="">
                <option value="">Jan</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
              </select>
              <select name="" id="">
                <option value="">2023</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
              </select>
            </div>
          </div>
          <div className="formRadioDiv">
            <p>Gender</p>
            <div className="formRadioDiv__div">
              <div>
                <label>Male</label>
                <input type="radio" name="" id="" />
              </div>
              <div>
                <label>Femail</label>
                <input type="radio" name="" id="" />
              </div>
              <div>
                <label>Custom</label>
                <input type="radio" name="" id="" />
              </div>
            </div>
          </div>

          <div className="newAccBtn">
            <button>Create new account</button>
          </div>
        </form>
      </div>
    </BlurWrapper>
  );
}

export default SignUpCard;
