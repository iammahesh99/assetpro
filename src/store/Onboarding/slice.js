import { createSlice } from "@reduxjs/toolkit";
import { userSelectionData } from "../../api/mockdata/userSelectiondata";

const onboardingSlice = createSlice({
  name: "onBoarding",
  initialState: {
    therepaticArea: userSelectionData,
    moa: [],
    indication: [],
    phases: [],
  },
  reducers: {
    getMoa: (state, action) => {
      state.moa = action.payload;
    },
    getIndication: (state, action) => {
      state.indication = action.payload;
    },
    getPhases: (state, action) => {
      state.phases = action.payload;
    },
  },
});
const { reducer, actions } = onboardingSlice;
export const { getMoa, getIndication, getPhases } = actions;

export default reducer;
