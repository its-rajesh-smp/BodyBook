import React from 'react';
import "./MessagePage.css"
import MessageBox from '../../Components/Message Page/Message Box/MessageBox';
import Friend from '../../Components/UI/Friend/Friend';
import { ShowOnDesktop } from '../../Styles/media';

function MessagePage(props) {

    let dummy = []
    while (dummy.length !== 50) {
        dummy.push(<Friend />)
    }

    return (
        <div className=' MessagePage-div pageContainer '>
            <ShowOnDesktop>
                <div>
                    <div className='container MessagePage-div__friendContainer'>
                        {dummy}
                    </div>
                </div>
            </ShowOnDesktop>

            <MessageBox />
        </div>
    );
}

export default MessagePage;
