import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducer/authReducer";
import heartBeatReducer from "../Reducer/heartBeatReducer";
import alertReducer from "../Reducer/alertReducer";
import userLogReducer from "../Reducer/userLogReducer";
import selectedPersonMessageReducer from "../Reducer/selectedPersonMessageReducer";
import postSearchReducer from "../Reducer/postSearchReducer";

const store = configureStore({
  reducer: {
    authSlice: authReducer.reducer,
    heartBeatSlice: heartBeatReducer.reducer,
    alertSlice: alertReducer.reducer,
    userLogSlice: userLogReducer.reducer,
    selectedPersonMessageSlice: selectedPersonMessageReducer.reducer,
    postSearchSlice: postSearchReducer.reducer,
  },
});
export default store;
