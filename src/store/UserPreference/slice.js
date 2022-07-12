import { createSlice } from "@reduxjs/toolkit";
import { API_STATUS } from "../../util/api_helper";
import { getUserPreference } from "./thunk";

const userPreferenceSlice = createSlice({
  name: "userpreference",
  initialState: {
    loadStatus: API_STATUS.IDLE,
    userStatus: "",
    error: "",
  },
  extraReducers: {
    [getUserPreference.pending]: (state) => {
      state.loadStatus = API_STATUS.LOADING;
    },
    [getUserPreference.fulfilled]: (state, action) => {
      state.loadStatus = API_STATUS.COMPLETED;
      state.userStatus = action.payload;
    },
    [getUserPreference.rejected]: (state, action) => {
      state.loadStatus = API_STATUS.FAILED;
      if (action.payload) {
        state.error = action.payload.message;
      } else {
        state.error = action.error.message;
      }
    },
  },
});
const { reducer } = userPreferenceSlice;
export default reducer;
