import axios from "axios";
import { MESSAGE_COLLECTION, USER } from "../../Firebase/API_URL";
import generateChatId from "../../Functions/generateChatId";
import { setAlert } from "../Reducer/alertReducer";
import { ref, runTransaction, update } from "firebase/database";
import { database } from "../../Firebase/firestore";

export const sendMessage = (selectedFriend, message, setMessage) => {
    return async (dispatch, getState) => {
        try {
            const myData = getState().authSlice.userData
            const myEmail = myData.email.replace(".", "").replace("@", "")
            const friendEmail = selectedFriend.email.replace(".", "").replace("@", "")

            const friendRef = ref(database, `users/${friendEmail}/friends/${myEmail}/newMessage`);
            const logRef = ref(database, `users/${friendEmail}/messageLog/newMessage`);

            // For Specific Friend Log
            runTransaction(friendRef, (currentData) => {
                if (currentData == null) { return 1 }
                else { return currentData + 1 }
            })

            // For total Unseen Message
            runTransaction(logRef, (currentData) => {
                if (currentData == null) { return 1 }
                else { return currentData + 1 }
            })

            // Generating Id
            const combinedId = generateChatId(myEmail, friendEmail)

            // Posting Message
            if (message.trim() !== "") {
                await axios.post(`${MESSAGE_COLLECTION}/${combinedId}/message.json`, { text: message, auther: myEmail, autherPhoto: myData.photo })
                setMessage("")

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



