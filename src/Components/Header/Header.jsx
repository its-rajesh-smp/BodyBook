import React from "react";
import "./Header.css";
import HeaderSearch from "../UI/Header/Header Search/HeaderSearch";
import HeaderUserLinks from "../UI/Header/Header User Links/HeaderUserLinks";
import HeaderNavLinks from "../UI/Header/Header NavLinks/HeaderNavLinks";
import HeaderHambargar from "../UI/Header/Header Hambargar/HeaderHambargar";
import { ShowOnDesktop, ShowOnMobile } from "../../Styles/media";

function Header(props) {
  return (
    <div className=" Header-div ">
      <HeaderSearch />
      <ShowOnDesktop>
        <HeaderNavLinks />
      </ShowOnDesktop>
      <HeaderUserLinks />
    </div>
  );
}

export default Header;
