import axios from "axios"
import { ALL_POSTS } from "../../Firebase/API_URL"

export const fetchFeedPostsAct = () => {
    return async (dispatch, getState) => {
        try {
            const { data: allPosts } = await axios.get(`${ALL_POSTS}.json`)
            console.log(allPosts);
        } catch (error) {
            console.log(error);
        }
    }
}