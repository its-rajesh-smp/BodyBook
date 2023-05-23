import axios from "axios"
import { ALL_POSTS } from "../../Firebase/API_URL"


/* -------------------------------------------------------------------------- */
/*                                ON CLICK LIKE                               */
/* -------------------------------------------------------------------------- */
export const onClickLikeAct = (id, isUserLiked, setIsUserLiked, setTotalLikes) => {
    return async (dsispatch, getState) => {
        const email = getState().authSlice.userData.email.replace(".", "").replace("@", "")
        try {
            if (isUserLiked) {
                await axios.delete(`${ALL_POSTS}/${id}/likes/${email}.json`)
                setIsUserLiked(false)
                setTotalLikes(p => p - 1)
            }
            else {
                const { data } = await axios.put(`${ALL_POSTS}/${id}/likes.json`, { [email]: email })
                setIsUserLiked(true)
                setTotalLikes(p => p + 1)
            }
        } catch (error) {
            console.log(error);
        }
    }
} 