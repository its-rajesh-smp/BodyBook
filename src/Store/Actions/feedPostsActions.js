import axios from "axios"
import { ALL_POSTS, USER_POSTS } from "../../Firebase/API_URL"

/* -------------------------------------------------------------------------- */
/*                                ADD NEW POST                                */
/* -------------------------------------------------------------------------- */
export const addNewPostAct = (post) => {
    return async (dispatch, getState) => {
        try {
            const userData = getState().authSlice.userData
            const userEmail = userData.email.replace(".", "").replace("@", "")
            const enteredInput = { post: post, date: new Date().toDateString(), ...userData }

            const { data: userPost } = await axios.post(`${USER_POSTS}/${userEmail}.json`, enteredInput)
            const newPostObj = { ...enteredInput, id: userPost.name }
            const { data: allPosts } = await axios.put(`${ALL_POSTS}/${userPost.name}.json`, newPostObj)

        } catch (error) {
            console.log(error);
        }
    }
}


