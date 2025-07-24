import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user_reducer";
import { useDispatch } from "react-redux";
import { videoReducer } from "./reducers/video_reducer";

export const store = configureStore({
    reducer: {
        userReducer,
        videoReducer
    }
})



export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); 