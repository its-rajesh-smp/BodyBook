import axios from "axios";
import { MESSAGE_COLLECTION } from "../../Firebase/API_URL";
import generateChatId from "../../Functions/generateChatId";

export const sendMessage = async (myEmail, friendEmail, message, setMessage) => {
    try {
        const combinedId = generateChatId(myEmail, friendEmail)
        if (message.trim() !== "") {
            await axios.post(`${MESSAGE_COLLECTION}/${combinedId}.json`, { text: message, auther: myEmail })
        }
        setMessage("")
    } catch (error) {
        console.log(error);
    }
}