import React from "react";
import "./NotificationPage.css";
import Notification from "../../Components/Notification Page/Notification/Notification";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserLogs } from "../../Store/Actions/userLogActions";

function NotificationPage(props) {
  const logs = useSelector((state) => state.userLogSlice.logs);
  const dispatch = useDispatch();
  // On Click Delete All Notification
  const deleteAllNotification = () => {
    dispatch(deleteUserLogs());
  };

  return (
    <div className=" NotificationPage-div pageContainer ">
      <button onClick={deleteAllNotification}>Clear All Notifications</button>
      {logs.length > 0 ? (
        logs.map((logData) => {
          return <Notification key={Math.random()} data={logData} />;
        })
      ) : (
        <h1>NO NEW NOTIFICATION</h1>
      )}
    </div>
  );
}

export default NotificationPage;
