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
        },
        logOutUser: (state) => {
            state.isAuth = false,
                state.idToken = ""
            state.userData = {}
        },
        editUserData: (state, action) => {
            state.userData = { ...state.userData, ...action.payload }
        }
    }
})

export const { authUser, logOutUser, editUserData } = authReducer.actions
export default authReducer