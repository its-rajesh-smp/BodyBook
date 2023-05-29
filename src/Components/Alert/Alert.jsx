import React from "react";
import ReactDOM from "react-dom";
import "./Alert.css";
import { useDispatch } from "react-redux";
import { clearAlert } from "../../Store/Reducer/alertReducer";

function Alert(props) {
  const dispatch = useDispatch();
  setTimeout(function () {
    dispatch(clearAlert());
  }, 5000);

  return ReactDOM.createPortal(
    <div className="Alert__div">
      <div className="Alert__div__conainer">
        <p>No User Found</p>
        <p>!</p>
      </div>
    </div>,
    document.querySelector("#alert")
  );
}

export default Alert;
