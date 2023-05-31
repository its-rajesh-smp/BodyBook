import axios from "axios";
import { MESSAGE_COLLECTION, SEND_FRIEND_REQ } from "../../Firebase/API_URL";
import generateChatId from "../../Functions/generateChatId";
import { setAlert } from "../Reducer/alertReducer";

export const sendFriendReq = async (friendEmail, myEmail, isSendedFriendRequest, setIsSendedFriendRequest) => {
    try {
        if (isSendedFriendRequest) {
            await axios.delete(`${SEND_FRIEND_REQ}/${myEmail}/friends/${friendEmail}.json`)
            await axios.delete(`${SEND_FRIEND_REQ}/${friendEmail}/friends/${myEmail}.json`)

        }
        else {
            await axios.patch(`${SEND_FRIEND_REQ}/${myEmail}/friends.json`, { [friendEmail]: { requestSended: true } })
            await axios.patch(`${SEND_FRIEND_REQ}/${friendEmail}/friends.json`, { [myEmail]: { getRequest: true } })

        }
    } catch (error) {
        console.log(error);
        dispatch(setAlert({
            type: "error",
            message: error.response.data.error.message,
            color: "red"
        }))
    }
}





export const acceptFriendReq = (myFriendEmail, friendName) => {
    return async (dispatch, getState) => {
        try {
            const myMainEmail = getState().authSlice.userData.email
            const myName = getState().authSlice.userData.name
            const myEmail = myMainEmail.replace(".", "").replace("@", "")
            const friendEmail = myFriendEmail.replace(".", "").replace("@", "")

            await axios.put(`${SEND_FRIEND_REQ}/${myEmail}/friends/${friendEmail}.json`, { accept: true, email: myFriendEmail, name: friendName })
            await axios.put(`${SEND_FRIEND_REQ}/${friendEmail}/friends/${myEmail}.json`, { accept: true, email: myMainEmail, name: myName })

        } catch (error) {
            console.log(error);
            dispatch(setAlert({
                type: "error",
                message: error.response.data.error.message,
                color: "red"
            }))
        }
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
        dispatch(setAlert({
            type: "error",
            message: error.response.data.error.message,
            color: "red"
        }))
    }
}
