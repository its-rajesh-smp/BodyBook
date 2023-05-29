import { createSlice } from "@reduxjs/toolkit";

const alertReducer = createSlice({
    name: "alert",
    initialState: {
        isAlert: false,
        type: "error",
        message: "No User",
        color: "red"

    },
    reducers: {
        setAlert: (state, action) => {
            state.isAlert = true
            state.color = action.payload.color
            state.type = action.payload.type
            state.message = action.payload.message
        },
        clearAlert: (state) => {
            state.isAlert = false
            state.color = ""
            state.message = ""
            state.type = ""
        }
    }

})

export default alertReducer
export const { setAlert, clearAlert } = alertReducer.actions
