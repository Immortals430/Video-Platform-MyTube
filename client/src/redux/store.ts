import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user_reducer";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        userReducer
    }
})

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); 