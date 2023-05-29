import React from "react";
import Header from "../Components/Header/Header";
import { useSelector } from "react-redux";
import { memo } from "react";

function MyLayout(props) {
  const isAuth = useSelector((state) => state.authSlice.isAuth);
  return <>{isAuth && <Header />}</>;
}

export default memo(MyLayout);
