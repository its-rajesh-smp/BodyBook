import axios from "axios"
import { ALL_POSTS, USER_POSTS } from "../../Firebase/API_URL"
import { setAlert } from "../Reducer/alertReducer"

/* -------------------------------------------------------------------------- */
/*                                ON CLICK LIKE                               */
/* -------------------------------------------------------------------------- */
export const onClickLikeAct = async (id, email, postUserEmail, isUserLiked) => {
    try {
        let postEmail = postUserEmail.replace(".", "").replace("@", "")
        if (isUserLiked) {
            await axios.delete(`${ALL_POSTS}/${id}/likes/${email}.json`)
            await axios.delete(`${USER_POSTS}/${postEmail}/${id}/likes/${email}.json`)

        }
        else {
            await axios.patch(`${ALL_POSTS}/${id}/likes.json`, { [email]: email })
            await axios.patch(`${USER_POSTS}/${postEmail}/${id}/likes.json`, { [email]: email })


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