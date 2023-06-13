import React, { useEffect, useState } from "react";
import "./HeaderSearch.css";
import HeaderHambargar from "../Header Hambargar/HeaderHambargar";
import { ShowOnDesktop, ShowOnMobile } from "../../../../Styles/media";
import { useDispatch, useSelector } from "react-redux";
import { searchPost } from "../../../../Store/Reducer/postSearchReducer";

function HeaderSearch(props) {
  const [visibleHambargar, setVisibleHambargar] = useState(false);

  const dispatch = useDispatch();
  const onClickShowHambargar = () => {
    setVisibleHambargar((p) => !p);
  };

  // On Type In Search
  const onChangeSearchHandeler = (e) => {
    dispatch(searchPost(e.target.value));
  };

  return (
    <div className=" HeaderSearch-div ">
      <ShowOnMobile>
        {visibleHambargar && (
          <HeaderHambargar
            totalNewMessage={props.totalNewMessage}
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

      <input
        onChange={onChangeSearchHandeler}
        type="text"
        placeholder="Search post"
      />
    </div>
  );
}

export default HeaderSearch;
