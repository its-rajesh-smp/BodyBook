import axios from "axios";
import { MESSAGE_COLLECTION, SEND_FRIEND_REQ, USER } from "../../Firebase/API_URL";
import generateChatId from "../../Functions/generateChatId";
import { setAlert } from "../Reducer/alertReducer";
import Friend from "../../Components/UI/Friend/Friend";

export const sendFriendReq = (friendEmail, myEmail, isSendedFriendRequest) => {
    return async (dispatch, getState) => {
        const myName = getState().authSlice.userData.name
        try {
            if (isSendedFriendRequest) {
                await axios.delete(`${SEND_FRIEND_REQ}/${myEmail}/friends/${friendEmail}.json`)
                await axios.delete(`${SEND_FRIEND_REQ}/${friendEmail}/friends/${myEmail}.json`)

            }
            else {
                await axios.patch(`${SEND_FRIEND_REQ}/${myEmail}/friends.json`, { [friendEmail]: { requestSended: true } })
                await axios.patch(`${SEND_FRIEND_REQ}/${friendEmail}/friends.json`, { [myEmail]: { getRequest: true } })
                await axios.post(`${USER}/${friendEmail}/log.json`, { type: "FRIEND REQUEST", person: myName })
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
}





export const acceptFriendReq = (friendData) => {
    return async (dispatch, getState) => {
        try {
            const mydata = getState().authSlice.userData
            const myEmail = mydata.email.replace(".", "").replace("@", "")
            const friendEmail = friendData.email.replace(".", "").replace("@", "")
            delete friendData.friends
            delete friendData.lastActive
            delete friendData.log
            await axios.put(`${SEND_FRIEND_REQ}/${myEmail}/friends/${friendEmail}.json`, { accept: true, ...friendData })
            await axios.put(`${SEND_FRIEND_REQ}/${friendEmail}/friends/${myEmail}.json`, { accept: true, ...mydata })
            await axios.post(`${USER}/${friendEmail}/log.json`, { type: "FRIEND REQUEST ACCEPT", person: mydata.name })

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
