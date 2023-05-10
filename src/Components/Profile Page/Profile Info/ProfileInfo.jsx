import React from 'react';
import "./ProfileInfo.css"

function ProfileInfo(props) {
    return (
        <div className=' ProfileInfo-div container'>
            <div>
                <p>Address</p>
                <p><span>Jorisha,Simlapal,Bankura,722151</span><i className='bx bx-edit-alt'></i></p>
            </div>
            <div>
                <p>Mobile</p>
                <p><span>rajesh.singhamahapatra@gmail.com</span><i className='bx bx-edit-alt'></i></p>
            </div>
            <div>
                <p>Email</p>
                <p><span>rajesh.singhamahapatra@gmail.com</span><i className='bx bx-edit-alt'></i></p>
            </div>
            <div>
                <p>DOB</p>
                <p><span>05/08/2022</span><i className='bx bx-edit-alt'></i></p>
            </div>
        </div>
    );
}

export default ProfileInfo;
