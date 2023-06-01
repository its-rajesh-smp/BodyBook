import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducer/authReducer";
import heartBeatReducer from "../Reducer/heartBeatReducer";
import alertReducer from "../Reducer/alertReducer";
import userLogReducer from "../Reducer/userLogReducer";
import selectedPersonMessageReducer from "../Reducer/selectedPersonMessageReducer";


const store = configureStore({
    reducer: {
        authSlice: authReducer.reducer,
        heartBeatSlice: heartBeatReducer.reducer,
        alertSlice: alertReducer.reducer,
        userLogSlice: userLogReducer.reducer,
        selectedPersonMessageSlice: selectedPersonMessageReducer.reducer
    }
})
export default store