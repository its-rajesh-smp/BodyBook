import axios from "axios"
import { USER } from "../../Firebase/API_URL"

export const deleteUserLogs = () => {
    return async (dispatch, getState) => {
        const myEmail = getState().authSlice.userData.email.replace(".", "").replace("@", "")
        try {
            await axios.delete(`${USER}/${myEmail}/log.json`)
        } catch (error) {
            console.log(error);
        }
    }
}