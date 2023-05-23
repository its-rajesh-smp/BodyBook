import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducer/authReducer";
import feedLikeReducer from "../Reducer/feedLikeReducer";

const store = configureStore({
    reducer: {
        authSlice: authReducer.reducer,
        feedLikeSlice: feedLikeReducer.reducer
    }
})
export default store