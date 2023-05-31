import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducer/authReducer";
import heartBeatReducer from "../Reducer/heartBeatReducer";
import alertReducer from "../Reducer/alertReducer";
import userLogReducer from "../Reducer/userLogReducer";


const store = configureStore({
    reducer: {
        authSlice: authReducer.reducer,
        heartBeatSlice: heartBeatReducer.reducer,
        alertSlice: alertReducer.reducer,
        userLogSlice: userLogReducer.reducer
    }
})
export default store