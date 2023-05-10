import React from 'react';
import "./App.css"
import LoginPage from '../Pages/LoginPage/LoginPage';
import HeaderSearch from '../Components/UI/Header/Header Search/HeaderSearch';
import Header from '../Components/Header/Header';
import HomePage from '../Pages/HomePage/HomePage';
import MessagePage from '../Pages/MessagePage/MessagePage';
import ProfilePage from '../Pages/ProfilePage/ProfilePage';
import NotificationPage from '../Pages/NotificationPage/NotificationPage';

function App(props) {
  return (
    <div className=' App-div '>
      <Header />
      {/* <LoginPage /> */}
      {/* <HomePage /> */}
      {/* <MessagePage /> */}
      {/* <ProfilePage /> */}
      <NotificationPage />
    </div>
  );
}

export default App;
