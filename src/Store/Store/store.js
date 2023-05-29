import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducer/authReducer";
import heartBeatReducer from "../Reducer/heartBeatReducer";
import alertReducer from "../Reducer/alertReducer";


const store = configureStore({
    reducer: {
        authSlice: authReducer.reducer,
        heartBeatSlice: heartBeatReducer.reducer,
        alertSlice: alertReducer.reducer
    }
})
export default store