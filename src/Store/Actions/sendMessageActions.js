import axios from "axios";
import { MESSAGE_COLLECTION } from "../../Firebase/API_URL";
import generateChatId from "../../Functions/generateChatId";
import { setAlert } from "../Reducer/alertReducer";

export const sendMessage = async (myEmail, friendEmail, message, setMessage) => {
    try {
        const combinedId = generateChatId(myEmail, friendEmail)
        if (message.trim() !== "") {
            await axios.post(`${MESSAGE_COLLECTION}/${combinedId}.json`, { text: message, auther: myEmail })
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