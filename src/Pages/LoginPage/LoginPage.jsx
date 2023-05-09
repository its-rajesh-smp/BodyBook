import React from 'react';
import "./LoginPage.css"
import LoginBox from '../../Components/Login Page/LoginBox/LoginBox';
import SignUpCard from '../../Components/Login Page/SignUpCard/SignUpCard';

function LoginPage(props) {
    return (
        <div className=' LoginPage-div '>
            <div className='LoginPage-div__logoContainer'>
                <h1 className='logo'>bodyBook</h1>
                <h2 className='logo_desc'>Bodybook helps you connect and share with the people in your life.</h2>
            </div>

            <LoginBox />

            <SignUpCard />
        </div>
    );
}

export default LoginPage;
