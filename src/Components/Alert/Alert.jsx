import React from "react";
import ReactDOM from "react-dom";
import "./Alert.css";
import { useDispatch, useSelector } from "react-redux";
import { clearAlert } from "../../Store/Reducer/alertReducer";

function Alert(props) {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alertSlice);

  const timeout = setTimeout(function () {
    dispatch(clearAlert());
  }, 5000);

  return ReactDOM.createPortal(
    <div className="Alert__div">
      <div
        style={{ backgroundColor: `${alert.color}` }}
        className="Alert__div__conainer"
      >
        <p>!</p>
        <p>{alert.message}</p>
        <p
          onClick={() => {
            clearTimeout(timeout);
            dispatch(clearAlert());
          }}
        >
          X
        </p>
      </div>
    </div>,
    document.querySelector("#alert")
  );
}

export default Alert;
