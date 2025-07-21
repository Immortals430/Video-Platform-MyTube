import { authenticateAPI } from "@/app/api/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


let initialState = {
  loggedUser: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    ADD_LOGGEDUSER: (state, action) => {
      state.loggedUser = action.payload;
    },
  },
});

export const handleAuthentication = createAsyncThunk(
  "user/login",
  async (token: string, { dispatch }) => {
    try {
      const {data} = await authenticateAPI(token);
      dispatch(ADD_LOGGEDUSER(data.data))

    } catch (err) {
      console.log(err);
    }
  }
);

export const {ADD_LOGGEDUSER} = userSlice.actions;
export const userReducer = userSlice.reducer;
export const userSelector = (state: Selector) => state.userReducer;

interface Selector {
  userReducer: any;
}
