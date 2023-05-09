import React from 'react';
import "./NewPostTextField.css"

function NewPostTextField(props) {
    return (
        <div className=' NewPostTextField-div '>
            <div contentEditable={true} className="textArea">What is going on your mind!</div>
            <div className='addPhoto'>
                <p>Drag & Drop</p>
            </div>
        </div>
    );
}






export default NewPostTextField;
