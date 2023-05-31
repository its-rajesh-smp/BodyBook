import React, { useEffect, useState } from "react";
import "./HeaderUserLinks.css";
import { ShowOnDesktop } from "../../../../Styles/media";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onValue, ref } from "firebase/database";
import { database } from "../../../../Firebase/firestore";
import { fetchLogs } from "../../../../Store/Reducer/userLogReducer";

function HeaderUserLinks(props) {
  // Navigate To My Profile
  const myemail = useSelector((state) =>
    state.authSlice.userData.email.replace(".", "").replace("@", "")
  );

  const dispatch = useDispatch();
  const [totalNotification, setTotalNotification] = useState(0);

  // Fetching Logs For Showing In Notification icon & inside the notification page
  useEffect(() => {
    const userLogRef = ref(database, `users/${myemail}/log`);
    const removeEventFunction = onValue(userLogRef, (snapshot) => {
      const newLogArr = snapshot.val() ? Object.values(snapshot.val()) : [];
      setTotalNotification(newLogArr.length);
      dispatch(fetchLogs(newLogArr));
    });

    return () => {
      removeEventFunction();
    };
  }, []);

  return (
    <div className=" HeaderUserLinks-div ">
      <ShowOnDesktop>
        <div className="navLink">
          <NavLink to={"/messages"}>
            <i className="bx bxs-message-square-dots"></i>
          </NavLink>
        </div>

        <div className="navLink">
          <NavLink to={"/notification"}>
            <i className="bx bxs-bell "></i>
            {totalNotification}
          </NavLink>
        </div>

        <div className="navLink">
          <NavLink to={"/"}>
            <i className="bx bxs-group"></i>
          </NavLink>
        </div>
      </ShowOnDesktop>

      <NavLink to={`/profile/${myemail}`}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt=""
        />
      </NavLink>
    </div>
  );
}

export default HeaderUserLinks;
