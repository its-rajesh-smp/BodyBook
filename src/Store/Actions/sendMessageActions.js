import axios from "axios";
import { MESSAGE_COLLECTION } from "../../Firebase/API_URL";
import generateChatId from "../../Functions/generateChatId";
import { setAlert } from "../Reducer/alertReducer";

export const sendMessage = (selectedFriend, message, setMessage) => {
    return async (dispatch, getState) => {
        try {
            const myData = getState().authSlice.userData
            const myEmail = myData.email.replace(".", "").replace("@", "")
            const friendEmail = selectedFriend.email.replace(".", "").replace("@", "")

            const combinedId = generateChatId(myEmail, friendEmail)

            if (message.trim() !== "") {
                await axios.post(`${MESSAGE_COLLECTION}/${combinedId}.json`, { text: message, auther: myEmail, autherPhoto: myData.photo })
            }
            setMessage("")
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