import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducer/authReducer";
import feedPostsReducer from "../Reducer/feedPostReducer";

const store = configureStore({
    reducer: {
        authSlice: authReducer.reducer,
        feedPostsSlice: feedPostsReducer.reducer
    }
})
export default store