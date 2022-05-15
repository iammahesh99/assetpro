import { createSlice } from "@reduxjs/toolkit";
import { FilterData } from "../../api/mockdata/AdvanceFilterData";

const filterSlice = createSlice({
  name: "advanceFilter",
  initialState: {
    filterData: FilterData,
    currentData: FilterData,
    handleFilterPopup: false,
  },
  reducers: {
    updateFilterData: (state, action) => {
      const { checkedId, filterId } = action.payload;
      const filterData = state.filterData.find(
        (filterData) => filterData.id === filterId
      );
      if (filterData) {
        const checkvalue = filterData.checkvalue.find(
          (checkvalue) => checkvalue.id === checkedId
        );
        if (checkvalue) {
          checkvalue.checked = !checkvalue.checked;
        }
      }
    },
    resetFilter: (state) => {
      state.filterData = FilterData;
      state.currentData = FilterData;
    },
    getCurrentStateData: (state, action) => {
      state.currentData = action.payload;
    },
    updateOnClose: (state) => {
      state.filterData = state.currentData;
    },
    setPopupState: (state, action) => {
      state.handleFilterPopup = action.payload;
    },
  },
});
const { reducer, actions } = filterSlice;
export const {
  updateFilterData,
  resetFilter,
  getCurrentStateData,
  updateOnClose,
  setPopupState,
} = actions;

export default reducer;
