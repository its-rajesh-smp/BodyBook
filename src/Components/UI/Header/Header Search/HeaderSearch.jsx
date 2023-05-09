import React from 'react';
import "./HeaderSearch.css"

function HeaderSearch(props) {
    return (
        <div className=' HeaderSearch-div '>
            <i className='bx bxl-facebook-square logo'></i>
            <input type="text" placeholder='Search post' />
        </div>
    );
}

export default HeaderSearch;
