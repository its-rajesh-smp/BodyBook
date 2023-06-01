import React from "react";
import "./ProfileInfo.css";

function ProfileInfo(props) {
  return (
    <div className=" ProfileInfo-div container">
      <div>
        <p>Address</p>
        <p>
          <span>-- , -- , -- , --</span>
        </p>
      </div>
      <div>
        <p>Mobile</p>
        <p>
          <span>{props.userData.phone}</span>
        </p>
      </div>
      <div>
        <p>Email</p>
        <p>
          <span>{props.userData.email}</span>
        </p>
      </div>
      <div>
        <p>DOB</p>
        <p>
          <span>{props.userData.dob}</span>
        </p>
      </div>
    </div>
  );
}

export default ProfileInfo;
