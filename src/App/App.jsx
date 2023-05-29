import React, { useEffect } from "react";
import "./App.css";
import MyLayout from "../Layout/MyLayout";
import MyRoutes from "../Routes/MyRoutes";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAct } from "../Store/Actions/authActions";
import { heartBeatAction } from "../Store/Actions/heartBeatAction";
import Alert from "../Components/Alert/Alert";

function App(props) {
  const isAlert = useSelector((state) => state.alertSlice);
  // Fetch User
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserAct());
    setInterval(function () {
      dispatch(heartBeatAction());
    }, 10000);
  }, []);

  return (
    <div className=" App-div ">
      {isAlert.isAlert && <Alert />}
      <MyLayout />
      <MyRoutes />
    </div>
  );
}

export default App;
