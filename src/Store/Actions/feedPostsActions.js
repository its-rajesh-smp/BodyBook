import axios from "axios"
import { ALL_POSTS } from "../../Firebase/API_URL"
import { setFeedPosts } from "../Reducer/feedPostReducer"

export const fetchFeedPostsAct = () => {
    return async (dispatch, getState) => {
        try {
            const { data: allPosts } = await axios.get(`${ALL_POSTS}.json`)
            // Forming Array
            const allPostArr = []
            Object.values(allPosts).map((eachUsersPosts) => {
                Object.values(eachUsersPosts).map(((post) => {
                    allPostArr.push(post)
                }))
            })
            // Dispatching The Arr
            dispatch(setFeedPosts(allPostArr))

        } catch (error) {
            console.log(error);
        }
    }
}


export const addNewPostAct = (post) => {
    return async (dispatch, getState) => {
        try {
            const userData = getState().authSlice.userData
            const userEmail = userData.email.replace(".", "").replace("@", "")
            const newPostObj = { post: post, date: new Date().toDateString(), ...userData }
            const { data: newPost } = await axios.post(`${ALL_POSTS}/${userEmail}.json`, newPostObj)
            console.log(newPost);
        } catch (error) {
            console.log(error);
        }
    }
}