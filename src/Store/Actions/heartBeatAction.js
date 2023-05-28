import axios from "axios";
import { USER } from "../../Firebase/API_URL";
import { setHeartBeat } from "../Reducer/heartBeatReducer";

export const heartBeatAction = () => {
    return async (dispatch, getState) => {
        try {
            if (getState().authSlice.isAuth) {
                const userEmail = getState().authSlice.userData.email.replace(".", "").replace("@", "")
                await axios.patch(`${USER}/${userEmail}.json`, { lastActive: new Date().getTime() })
                dispatch(setHeartBeat())
            }
        } catch (error) {
            console.log(error);
        }
    }
}