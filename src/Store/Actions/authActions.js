import axios from "axios"
import { GET_USER, SIGN_IN, SIGN_UP, USER } from "../../Firebase/API_URL"
import { authUser } from "../Reducer/authReducer"
import { heartBeatAction } from "./heartBeatAction"
import { setAlert } from "../Reducer/alertReducer"



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