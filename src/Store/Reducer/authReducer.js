import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
    name: "user-auth/data",
    initialState: {
        idToken: "",
        isAuth: false,
        userData: {}
    },
    reducers: {
        authUser: (state, action) => {
            state.isAuth = true
            state.idToken = action.payload.idToken
            state.userData = action.payload.userData
        }
    }
})

export const { authUser } = authReducer.actions
export default authReducer