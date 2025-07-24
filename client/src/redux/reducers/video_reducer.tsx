import { fetchVideoSuggestionAPI } from "@/app/api/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import Cookie from "js-cookie"
// const projectName = process.env.NEXT_PUBLIC_PROJECT_NAME || "MyTube"


let initialState = {
  searchResult: [],
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    ADD_SEARCHRESULT: (state, action) => {
      state.searchResult = action.payload;
    },
  },
});

export const handleSearchVideo = createAsyncThunk(
  "video/searchVideo",
  async (query: string, { dispatch }) => {
    try {
      const {data} =await fetchVideoSuggestionAPI(query);
      dispatch(ADD_SEARCHRESULT(data.data))
    } catch (err) {
      console.log(err);
    }
  }
);

export const {ADD_SEARCHRESULT} = videoSlice.actions;
export const videoReducer = videoSlice.reducer;
export const videoSelector = (state: Selector) => state.videoReducer;

interface Selector {
  videoReducer: any;
}
