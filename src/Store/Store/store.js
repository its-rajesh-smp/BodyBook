import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducer/authReducer";
import heartBeatReducer from "../Reducer/heartBeatReducer";


const store = configureStore({
    reducer: {
        authSlice: authReducer.reducer,
        heartBeatSlice: heartBeatReducer.reducer
    }
})
export default store