import axios from "axios";
import { ALL_POSTS, USER, USER_POSTS } from "../../Firebase/API_URL";

export const addCommentAct = (message, postData) => {
    return async (dispatch, getState) => {
        try {
            const postId = postData.id
            const myEmail = getState().authSlice.userData.email
            const userEmail = postData.email.replace(".", "").replace("@", "")
            const { data } = await axios.post(`${ALL_POSTS}/${postId}/comments.json`, { message: message, date: new Date().toLocaleString(), email: myEmail })
            await axios.put(`${USER_POSTS}/${userEmail}/${postId}/comments/${data.name}.json`, { message: message, date: new Date().toLocaleString(), email: myEmail })
        } catch (error) {
            console.log(error);
        }
    }
}