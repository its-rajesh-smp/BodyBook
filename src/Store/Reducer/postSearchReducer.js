import { createSlice } from "@reduxjs/toolkit";

const postSearchReducer = createSlice({
  name: "filter/search_posts",
  initialState: { searchValue: "" },
  reducers: {
    searchPost: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { searchPost } = postSearchReducer.actions;
export default postSearchReducer;
