import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: true,
  },
  reducers: {
    markFetchDone: (state) => {
      console.log("connected");
      state.fetchDone = true;
      return state;
    },
    markFetchingStarted: (state) => {
      return (state.currentlyFetching = true);
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
      return state;
    },
  },
});
export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;
