import { createSlice } from "@reduxjs/toolkit";

const selectedPersonMessageReducer = createSlice({
    name: "onclick/SelectPerson",
    initialState: { selectedUser: {} },
    reducers: {
        selectPerson: (state, action) => {
            state.selectedUser = action.payload
        },
        clearSelectedPerson: (state) => {
            state.selectedUser = {}
        }
    }
})

export const { selectPerson, clearSelectedPerson } = selectedPersonMessageReducer.actions
export default selectedPersonMessageReducer