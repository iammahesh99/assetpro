import { createSlice } from "@reduxjs/toolkit";
import { API_STATUS } from "../../../util/api_helper";
import { getArticleList } from "./thunk";
import { intialState } from "../../../api/mockdata/articleInitial";

const articleSlice = createSlice({
  name: "articles",
  initialState: {
    loadStatus: API_STATUS.IDLE,
    data: [],
    error: "",
    complete: false,
    selectData: intialState,
  },
  reducers: {
    getCompleted: (state, action) => {
      state.complete = action.payload;
    },
    getSelectData: (state, actions) => {
      state.selectData = state.data.filter((id) => id._id === actions.payload);
    },
  },
  extraReducers: {
    [getArticleList.pending]: (state) => {
      state.loadStatus = API_STATUS.LOADING;
    },
    [getArticleList.fulfilled]: (state, action) => {
      state.loadStatus = API_STATUS.COMPLETED;
      state.data = action.payload;
    },
    [getArticleList.rejected]: (state, action) => {
      state.loadStatus = API_STATUS.FAILED;
      if (action.payload) {
        state.error = action.payload.message;
      } else {
        state.error = action.error.message;
      }
    },
  },
});
const { reducer, actions } = articleSlice;
export const { getCompleted, getSelectData } = actions;

export default reducer;
