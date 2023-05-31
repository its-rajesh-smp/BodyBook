import React, { useEffect, useState } from "react";
import "./Header.css";
import HeaderSearch from "../UI/Header/Header Search/HeaderSearch";
import HeaderUserLinks from "../UI/Header/Header User Links/HeaderUserLinks";
import HeaderNavLinks from "../UI/Header/Header NavLinks/HeaderNavLinks";
import HeaderHambargar from "../UI/Header/Header Hambargar/HeaderHambargar";
import { ShowOnDesktop, ShowOnMobile } from "../../Styles/media";
import { onValue, ref } from "firebase/database";
import { database } from "../../Firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogs } from "../../Store/Reducer/userLogReducer";

function Header(props) {
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
    <div className=" Header-div ">
      <HeaderSearch totalNotification={totalNotification} />
      <ShowOnDesktop>
        <HeaderNavLinks />
      </ShowOnDesktop>
      <HeaderUserLinks
        myemail={myemail}
        totalNotification={totalNotification}
      />
    </div>
  );
}

export default Header;
