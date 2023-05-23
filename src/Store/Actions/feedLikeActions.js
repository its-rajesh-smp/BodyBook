import axios from "axios"
import { ALL_POSTS, USER } from "../../Firebase/API_URL"
import { removeFeedLike, setFeedLike } from "../Reducer/feedLikeReducer"


/* -------------------------------------------------------------------------- */
/*                                ON CLICK LIKE                               */
/* -------------------------------------------------------------------------- */
export const onClickLikeAct = (id) => {
    return async (dsispatch, getState) => {
        const userEmail = getState().authSlice.userData.email.replace(".", "").replace("@", "")
        const userAllLiked = { ...getState().feedLikeSlice.feedLike }
        try {
            if (userAllLiked[id]) {
                await axios.delete(`${USER}/${userEmail}/postLikes/${id}.json`)
                await axios.delete(`${ALL_POSTS}/${id}/postLikes/${userEmail}.json`)
                delete userAllLiked[id]
                dsispatch(removeFeedLike(userAllLiked))
            }
            else {
                await axios.patch(`${USER}/${userEmail}/postLikes.json`, { [id]: id })
                await axios.patch(`${ALL_POSTS}/${id}/postLikes.json`, { [userEmail]: userEmail })
                dsispatch(setFeedLike({ [id]: id }))
            }
        } catch (error) {
            console.log(error);
        }
    }
} 