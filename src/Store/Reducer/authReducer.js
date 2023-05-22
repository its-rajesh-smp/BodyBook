import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
    name: "user-auth/data",
    initialState: {
        idToken: "",
        isAuth: false,
        userData: {}
    },
    reducers: {
        loginUser: () => {

        },
        fetchUser: () => {

        }
    }
})

export const { loginUser, fetchUser } = authReducer.actions
export default authReducer