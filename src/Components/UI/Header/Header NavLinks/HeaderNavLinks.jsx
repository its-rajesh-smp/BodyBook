import React from "react";
import "./HeaderNavLinks.css";
import { useNavigate } from "react-router-dom";

function HeaderNavLinks(props) {
  const navigate = useNavigate();

  // On Home Btn Click
  const onHomeBtnClick = () => {
    navigate("/");
  };

  return (
    <div className=" HeaderNavLinks-div ">
      <i className=" HeaderNavLinks-div_navLink bx bxs-home "></i>

      <i
        onClick={onHomeBtnClick}
        className=" HeaderNavLinks-div_navLink bx bxs-home"
      ></i>

      <i className=" HeaderNavLinks-div_navLink bx bxs-home"></i>
    </div>
  );
}

export default HeaderNavLinks;
