import { createSlice } from "@reduxjs/toolkit";

const feedLikeReducer = createSlice({
    name: "user/feedLike",
    initialState: { feedLike: {} },
    reducers: {
        setFeedLike: (state, action) => {
            state.feedLike = { ...state.feedLike, ...action.payload }
        },
        removeFeedLike: (state, action) => {
            state.feedLike = action.payload
        }
    }
})

export const { setFeedLike, removeFeedLike } = feedLikeReducer.actions
export default feedLikeReducer