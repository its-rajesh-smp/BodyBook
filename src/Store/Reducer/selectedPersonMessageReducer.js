import { createSlice } from "@reduxjs/toolkit";

const selectedPersonMessageReducer = createSlice({
    name: "onclick/SelectPerson",
    initialState: { name: "", email: "", photoUrl: "" },
    reducers: {
        selectPerson: (state, action) => {
            state.email = action.payload.email,
                state.name = action.payload.name,
                state.photoUrl = action.payload.photoUrl
        },
        clearSelectedPerson: (state) => {
            state.email = ""
            state.name = ""
            state.photoUrl = ""
        }
    }
})

export const { selectPerson, clearSelectedPerson } = selectedPersonMessageReducer.actions
export default selectedPersonMessageReducer