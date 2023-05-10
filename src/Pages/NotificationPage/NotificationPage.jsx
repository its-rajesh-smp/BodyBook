import React from 'react';
import "./NotificationPage.css"
import Notification from '../../Components/Notification Page/Notification/Notification';

function NotificationPage(props) {
    return (
        <div className=' NotificationPage-div pageContainer '>
            <Notification />
            <Notification />
            <Notification />
            <h1>NO NEW NOTIFICATION</h1>
        </div>
    );
}

export default NotificationPage;
