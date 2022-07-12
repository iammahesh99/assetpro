import { createSlice } from "@reduxjs/toolkit";
//import { userSelectionData } from "../../api/mockdata/userSelectiondata";
import { API_STATUS } from "../../util/api_helper";
import { getAllTaIndication } from "./thunk";

const onboardingSlice = createSlice({
  name: "onBoarding",
  initialState: {
    therepaticArea: [],
    moa: [],
    indication: [],
    phases: [],
    loadStatus: API_STATUS.IDLE,
    error: "",
  },
  reducers: {
    // getMoa: (state, action) => {
    //   state.moa = action.payload;
    // },
    getIndication: (state, action) => {
      state.indication = action.payload;
    },
    // getPhases: (state, action) => {
    //   state.phases = action.payload;
    // },
  },
  extraReducers: {
    [getAllTaIndication.pending]: (state) => {
      state.loadStatus = API_STATUS.LOADING;
    },
    [getAllTaIndication.fulfilled]: (state, action) => {
      state.loadStatus = API_STATUS.COMPLETED;
      state.therepaticArea = action.payload;
    },
    [getAllTaIndication.rejected]: (state, action) => {
      state.loadStatus = API_STATUS.FAILED;
      if (action.payload) {
        state.error = action.payload.message;
      } else {
        state.error = action.error.message;
      }
    },
  },
});
const { reducer, actions } = onboardingSlice;
export const { getIndication } = actions;

export default reducer;
