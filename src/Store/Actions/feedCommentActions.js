import axios from "axios";
import { ALL_POSTS, USER_POSTS } from "../../Firebase/API_URL";
import { setAlert } from "../Reducer/alertReducer";

export const addCommentAct = (message, postData, setMessage, setIsLoader) => {
    return async (dispatch, getState) => {
        try {
            const postId = postData.id
            const myEmail = getState().authSlice.userData.email
            const userEmail = postData.email.replace(".", "").replace("@", "")
            const { data } = await axios.post(`${ALL_POSTS}/${postId}/comments.json`, { message: message, date: new Date().toLocaleString(), email: myEmail })
            await axios.put(`${USER_POSTS}/${userEmail}/${postId}/comments/${data.name}.json`, { message: message, date: new Date().toLocaleString(), email: myEmail })
        } catch (error) {
            console.log(error);
            dispatch(setAlert({
                type: "error",
                message: error.response.data.error.message,
                color: "red"
            }))
        }
        setMessage("")
        setIsLoader(false)
    }
}