import React, { useEffect, useState } from "react";
import "./App.css";
import MyLayout from "../Layout/MyLayout";
import MyRoutes from "../Routes/MyRoutes";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAct } from "../Store/Actions/authActions";
import { heartBeatAction } from "../Store/Actions/heartBeatAction";
import Alert from "../Components/Alert/Alert";
import LoadingPage from "../Pages/LoadingPage/LoadingPage";

function App(props) {
  const isAlert = useSelector((state) => state.alertSlice);
  const [isLoading, setIsLoading] = useState(true);
  // Fetch User
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserAct(setIsLoading));
    setInterval(function () {
      dispatch(heartBeatAction());
    }, 10000);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className=" App-div ">
      {isAlert.isAlert && <Alert />}
      <MyLayout />
      <MyRoutes />
    </div>
  );
}

export default App;
