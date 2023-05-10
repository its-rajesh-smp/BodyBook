import React from 'react';
import "./ProfilePage.css"
import ProfilePageHeader from '../../Components/Profile Page/Profile Page Header/ProfilePageHeader';
import ProfileInfo from '../../Components/Profile Page/Profile Info/ProfileInfo';
import PostContainer from '../../Components/Home Page/Post Container/PostContainer';

function ProfilePage(props) {
    return (
        <div className=' ProfilePage-div pageContainer '>
            <ProfilePageHeader />
            <div className='ProfilePage-div__container'>
                <ProfileInfo />
                <PostContainer />
            </div>
        </div>
    );
}

export default ProfilePage;
