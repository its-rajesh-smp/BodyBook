import React from 'react';
import "./LoginBox.css"

function LoginBox(props) {

    return (
        <div className=' LoginBox-div container '>
            <input type="text" name="" id="" placeholder='Enter Your Phone Number' />
            <input type="password" name="" id="" placeholder='Enter Your Password' />
            <button className='loginBtn'>Login</button>
            <p>Forgotten password?</p>
            <div className='newAccBtn'>
                <button >Create new account</button>
            </div>
        </div>
    );
}

export default LoginBox;
