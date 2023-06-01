import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage";
import HomePage from "../Pages/HomePage/HomePage";
import MessagePage from "../Pages/MessagePage/MessagePage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import NotificationPage from "../Pages/NotificationPage/NotificationPage";
import { useSelector } from "react-redux";
import { memo } from "react";
import FindFriendPage from "../Pages/Find Friend Page/FindFriendPage";
import MyFriendsPage from "../Pages/My Friends Page/MyFriendsPage";

function MyRoutes(props) {
  const isAuth = useSelector((state) => state.authSlice.isAuth);

  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path="/" element={<MyFriendsPage />} />
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/findfriend" element={<FindFriendPage />} />
          <Route path="/message/:messageId" element={<MessagePage />} />
          <Route path="/profile/:userEmail" element={<ProfilePage />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="*" element={<MyFriendsPage />} />
        </>
      ) : (
        <>
          <Route path="/" element={<LoginPage />} />
        </>
      )}
    </Routes>
  );
}

export default memo(MyRoutes);
