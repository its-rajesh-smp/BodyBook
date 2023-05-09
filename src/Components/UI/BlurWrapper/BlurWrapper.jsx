import React from 'react';
import "./BlurWrapper.css"

function BlurWrapper(props) {
    return (
        <div className=' BlurWrapper-div '>
            {props.children}
        </div>
    );
}

export default BlurWrapper;
