import axios from "axios";
import { SEND_FRIEND_REQ } from "../../Firebase/API_URL";

export const sendFriendReq = async (friendEmail, myEmail, isSendedFriendRequest, setIsSendedFriendRequest) => {
    try {
        if (isSendedFriendRequest) {
            await axios.delete(`${SEND_FRIEND_REQ}/${myEmail}/sendFriendRequest/${friendEmail}.json`)
            await axios.delete(`${SEND_FRIEND_REQ}/${friendEmail}/getFriendRequest/${myEmail}.json`)
            setIsSendedFriendRequest(false)
        }
        else {
            await axios.patch(`${SEND_FRIEND_REQ}/${myEmail}/sendFriendRequest.json`, { [friendEmail]: { accept: false } })
            await axios.patch(`${SEND_FRIEND_REQ}/${friendEmail}/getFriendRequest.json`, { [myEmail]: { accept: false } })
            setIsSendedFriendRequest(true)
        }
    } catch (error) {
        console.log(error);
    }
} 