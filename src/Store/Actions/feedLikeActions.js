import axios from "axios"
import { ALL_POSTS, USER, USER_POSTS } from "../../Firebase/API_URL"

/* -------------------------------------------------------------------------- */
/*                                ON CLICK LIKE                               */
/* -------------------------------------------------------------------------- */
export const onClickLikeAct = async (id, email, postUserEmail, isUserLiked, setIsUserLiked, setTotalLikes) => {
    try {
        let postEmail = postUserEmail.replace(".", "").replace("@", "")
        if (isUserLiked) {
            await axios.delete(`${ALL_POSTS}/${id}/likes/${email}.json`)
            if (postEmail === email) {
                await axios.delete(`${USER_POSTS}/${email}/${id}/likes/${email}.json`)
            }
            setIsUserLiked(false)
            setTotalLikes(p => p - 1)
        }
        else {
            await axios.put(`${ALL_POSTS}/${id}/likes.json`, { [email]: email })
            if (postEmail === email) {
                await axios.put(`${USER_POSTS}/${email}/${id}/likes.json`, { [email]: email })
            }
            setIsUserLiked(true)
            setTotalLikes(p => p + 1)
        }
    } catch (error) {
        console.log(error);
    }

} 