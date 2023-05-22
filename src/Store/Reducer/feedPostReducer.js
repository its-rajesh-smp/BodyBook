import { createSlice } from "@reduxjs/toolkit";

const feedPostsReducer = createSlice({
    name: "allposts-feed",
    initialState: { feedPosts: [] },
    reducers: {
        setFeedPosts: (state, action) => {
            state.feedPosts = action.payload
        }
    }
})

export const { setFeedPosts } = feedPostsReducer.actions
export default feedPostsReducer