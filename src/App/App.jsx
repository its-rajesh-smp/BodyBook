import React, { useEffect } from "react";
import "./App.css";
import MyLayout from "../Layout/MyLayout";
import MyRoutes from "../Routes/MyRoutes";
import { useDispatch } from "react-redux";
import { fetchUserAct } from "../Store/Actions/authActions";
import { heartBeatAction } from "../Store/Actions/heartBeatAction";

function App(props) {
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
      <MyLayout />
      <MyRoutes />
    </div>
  );
}

export default App;
