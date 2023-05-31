import React, { useState } from "react";
import "./HeaderSearch.css";
import HeaderHambargar from "../Header Hambargar/HeaderHambargar";
import { ShowOnMobile } from "../../../../Styles/media";

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
      </ShowOnMobile>

      <i
        onClick={onClickShowHambargar}
        className="bx bxl-facebook-square logo"
      ></i>

      <input type="text" placeholder="Search post" />
    </div>
  );
}

export default HeaderSearch;
