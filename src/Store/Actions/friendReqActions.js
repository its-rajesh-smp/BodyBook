import axios from "axios";
import { MESSAGE_COLLECTION, SEND_FRIEND_REQ } from "../../Firebase/API_URL";
import generateChatId from "../../Functions/generateChatId";

export const sendFriendReq = async (friendEmail, myEmail, isSendedFriendRequest, setIsSendedFriendRequest) => {
    try {
        if (isSendedFriendRequest) {
            await axios.delete(`${SEND_FRIEND_REQ}/${myEmail}/friends/${friendEmail}.json`)
            await axios.delete(`${SEND_FRIEND_REQ}/${friendEmail}/friends/${myEmail}.json`)

        }
        else {
            await axios.patch(`${SEND_FRIEND_REQ}/${myEmail}/friends.json`, { [friendEmail]: { requestSended: true, getRequest: false, accept: false } })
            await axios.patch(`${SEND_FRIEND_REQ}/${friendEmail}/friends.json`, { [myEmail]: { requestSended: false, getRequest: true, accept: false } })

        }
    } catch (error) {
        console.log(error);
    }
}





export const acceptFriendReq = async (friendEmail, myEmail, setIsBothAreFriend) => {
    try {
        await axios.patch(`${SEND_FRIEND_REQ}/${myEmail}/friends.json`, { [friendEmail]: { requestSended: false, getRequest: false, accept: true } })
        await axios.patch(`${SEND_FRIEND_REQ}/${friendEmail}/friends.json`, { [myEmail]: { requestSended: false, getRequest: false, accept: true } })

    } catch (error) {
        console.log(error);
    }

}



export const removeFriend = async (friendEmail, myEmail, setIsBothAreFriend, setIsSendedFriendRequest) => {
    try {
        const combinedId = generateChatId(myEmail, friendEmail)
        await axios.delete(`${SEND_FRIEND_REQ}/${myEmail}/friends/${friendEmail}.json`)
        await axios.delete(`${SEND_FRIEND_REQ}/${friendEmail}/friends/${myEmail}.json`)
        await axios.delete(`${MESSAGE_COLLECTION}/${combinedId}.json`)
    } catch (error) {
        console.log(error);
    }
}