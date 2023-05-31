import { createSlice } from "@reduxjs/toolkit";
const userLogReducer = createSlice({
    name: "user/logs/notifications",
    initialState: { logs: [] },
    reducers: {
        fetchLogs: (state, action) => {
            state.logs = action.payload
        }
    }
})

export default userLogReducer
export const { fetchLogs } = userLogReducer.actions