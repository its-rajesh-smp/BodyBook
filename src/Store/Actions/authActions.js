import axios from "axios"
import { GET_USER, SIGN_IN, SIGN_UP, USER } from "../../Firebase/API_URL"
import { authUser, editUserData } from "../Reducer/authReducer"
import { heartBeatAction } from "./heartBeatAction"
import { setAlert } from "../Reducer/alertReducer"
import { storage } from "../../Firebase/firestore"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"



/* -------------------------------------------------------------------------- */
/*                                 CREATE USER                                */
/* -------------------------------------------------------------------------- */
export const createUserAct = (enteredInput, setIsLoading) => {
    return async (dispatch, getState) => {
        try {
            const { data: authData } = await axios.post(SIGN_UP, { email: enteredInput.email, password: enteredInput.password, returnSecureToken: true })
            delete enteredInput.password
            const userEmail = enteredInput.email.replace(".", "").replace("@", "")
            const { data: userData } = await axios.put(`${USER}/${userEmail}.json`, { ...enteredInput, lastActive: new Date().getTime() })
            localStorage.setItem("bodybook", authData.idToken)
            dispatch(authUser({ ...authData, userData }))
        } catch (error) {
            console.log(error);
            dispatch(setAlert({
                type: "error",
                message: error.response.data.error.message,
                color: "red"
            }))
        }
        setIsLoading(false)
    }
}



/* -------------------------------------------------------------------------- */
/*                                 LOGIN USER                                 */
/* -------------------------------------------------------------------------- */
export const loginUserAct = (enteredInput, setIsLoading) => {
    return async (dispatch, getState) => {
        try {
            const { data: authData } = await axios.post(SIGN_IN, { email: enteredInput.email, password: enteredInput.password, returnSecureToken: true })
            const userEmail = enteredInput.email.replace(".", "").replace("@", "")
            const { data: userData } = await axios.get(`${USER}/${userEmail}.json`)
            dispatch(heartBeatAction())
            localStorage.setItem("bodybook", authData.idToken)
            delete userData.friends
            dispatch(authUser({ ...authData, userData }))
        } catch (error) {
            console.log(error);
            dispatch(setAlert({
                type: "error",
                message: error.response.data.error.message,
                color: "red"
            }))
        }
        setIsLoading(false)
    }
}



/* -------------------------------------------------------------------------- */
/*                                 FETCH USER                                 */
/* -------------------------------------------------------------------------- */
export const fetchUserAct = (setIsLoading) => {
    return async (dispatch, getState) => {
        try {
            const localIdToken = localStorage.getItem("bodybook")
            if (!localIdToken) {
                setIsLoading(false)
                return
            }
            const { data: authData } = await axios.post(GET_USER, { idToken: localIdToken })
            const userEmail = authData.users[0].email.replace(".", "").replace("@", "")
            const { data: userData } = await axios.get(`${USER}/${userEmail}.json`)


            dispatch(heartBeatAction())
            delete userData.friends
            dispatch(authUser({ ...authData.users[0], userData }))
        } catch (error) {
            console.log(error);
            dispatch(setAlert({
                type: "error",
                message: error.response.data.error.message,
                color: "red"
            }))
        }
        setIsLoading(false)
    }
}



/* -------------------------------------------------------------------------- */
/*                                EDIT PROFILE                                */
/* -------------------------------------------------------------------------- */
export const editProfileAct = (enteredInput, password, setLoader, navigate) => {
    return async (dispatch, getState) => {
        const currentUserData = getState().authSlice.userData
        const myEmail = currentUserData.email.replace(".", "").replace("@", "")
        try {
            let photoUrl = currentUserData.photo
            // Change photo only if really need to changed
            if (currentUserData.photo !== enteredInput.photo) {
                const storageRef = ref(storage, `userProfile/${myEmail}`)
                const imgResponse = await uploadBytes(storageRef, enteredInput.photo)
                const imgPath = ref(storage, `${imgResponse.ref.fullPath}`)
                const downloadUrl = await getDownloadURL(imgPath)
                photoUrl = downloadUrl
            }
            const { data } = await axios.patch(`${USER}/${myEmail}.json`, { ...enteredInput, photo: photoUrl })
            dispatch(editUserData(data))

            // Change password only if really need to changed
            if (password === "******") {

            }

            navigate()
        } catch (error) {
            console.log(error);
        }
        setLoader(false)
    }
}