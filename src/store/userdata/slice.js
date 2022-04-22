import { createSlice } from "@reduxjs/toolkit";
import { getUserList } from "./thunk";
import { API_STATUS } from "../../util/api_helper";
const userListSlice = createSlice({
  name: "userList",
  initialState: {
    loadStatus: API_STATUS.IDLE,
    data: [],
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getUserList.pending]: (state) => {
      state.loadStatus = API_STATUS.LOADING;
    },
    [getUserList.fulfilled]: (state, action) => {
      state.loadStatus = API_STATUS.COMPLETED;
      state.data = action.payload;
    },
    [getUserList.rejected]: (state, action) => {
      state.loadStatus = API_STATUS.FAILED;
      if (action.payload) {
        state.error = action.payload.message;
      } else {
        state.error = action.error.message;
      }
    },
  },
});

const { reducer } = userListSlice;
export default reducer;
