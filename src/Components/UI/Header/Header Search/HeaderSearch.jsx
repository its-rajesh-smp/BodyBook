import React, { useState } from "react";
import "./HeaderSearch.css";
import HeaderHambargar from "../Header Hambargar/HeaderHambargar";
import { ShowOnDesktop, ShowOnMobile } from "../../../../Styles/media";

function HeaderSearch(props) {
  const [visibleHambargar, setVisibleHambargar] = useState(false);
  const onClickShowHambargar = () => {
    setVisibleHambargar((p) => !p);
  };

  return (
    <div className=" HeaderSearch-div ">
      <ShowOnMobile>
        {visibleHambargar && (
          <HeaderHambargar
            onClickShowHambargar={onClickShowHambargar}
            totalNotification={props.totalNotification}
          />
        )}
        <i onClick={onClickShowHambargar} className="bx bx-menu logo"></i>
      </ShowOnMobile>
      <ShowOnDesktop>
        <img
          className="logo_desktop"
          src="https://cdn-icons-png.flaticon.com/512/8112/8112669.png"
          alt=""
        />
      </ShowOnDesktop>

      <input type="text" placeholder="Search post" />
    </div>
  );
}

export default HeaderSearch;
