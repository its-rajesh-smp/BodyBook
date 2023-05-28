import { createSlice } from "@reduxjs/toolkit";

const heartBeatReducer = createSlice({
    name: "heartBeat",
    initialState: { switch: false },
    reducers: {
        setHeartBeat: (state) => {
            state.switch = !state.switch
        }
    }
})

export const { setHeartBeat } = heartBeatReducer.actions
export default heartBeatReducer