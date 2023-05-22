import { createSlice } from "@reduxjs/toolkit";

const feedPostsReducer = createSlice({
    name: "allposts-feed",
    initialState: { feedPosts: [] },
    reducers: {
        setFeedPosts: (state, action) => {
            state.feedPosts = action.payload
        },
        addFeedPosts: (state, action) => {
            state.feedPosts = [action.payload, ...state.feedPosts]
        }
    }
})

export const { setFeedPosts, addFeedPosts } = feedPostsReducer.actions
export default feedPostsReducer