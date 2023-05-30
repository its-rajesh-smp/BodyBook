import axios from "axios"
import { ALL_POSTS, USER_POSTS } from "../../Firebase/API_URL"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from "../../Firebase/firestore"
import { setAlert } from "../Reducer/alertReducer"

/* -------------------------------------------------------------------------- */
/*                                ADD NEW POST                                */
/* -------------------------------------------------------------------------- */
export const addNewPostAct = (post, image) => {
    return async (dispatch, getState) => {
        try {
            const userData = getState().authSlice.userData
            const userEmail = userData.email.replace(".", "").replace("@", "")
            if (image) {
                const storageRef = ref(storage, `postImages/${Date.now()}`)
                const imgResponse = await uploadBytes(storageRef, image)
                const imgPath = ref(storage, `postImages/${imgResponse.ref.name}`)
                const downloadUrl = await getDownloadURL(imgPath)

                const enteredInput = { post: post, date: new Date().toDateString(), ...userData, image: downloadUrl }
                const { data: userPost } = await axios.post(`${USER_POSTS}/${userEmail}.json`, enteredInput)
                const newPostObj = { ...enteredInput, id: userPost.name }
                const { data: allPosts } = await axios.put(`${ALL_POSTS}/${userPost.name}.json`, newPostObj)
            }
            else {
                const enteredInput = { post: post, date: new Date().toDateString(), ...userData }
                const { data: userPost } = await axios.post(`${USER_POSTS}/${userEmail}.json`, enteredInput)
                const newPostObj = { ...enteredInput, id: userPost.name }
                const { data: allPosts } = await axios.put(`${ALL_POSTS}/${userPost.name}.json`, newPostObj)
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
}


