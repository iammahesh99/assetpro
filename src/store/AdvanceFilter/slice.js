import { createSlice } from "@reduxjs/toolkit";
import { FilterData } from "../../api/mockdata/AdvanceFilterData";

const filterSlice = createSlice({
  name: "advanceFilter",
  initialState: {
    filterData: FilterData,
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
    },
  },
});
const { reducer, actions } = filterSlice;
export const { updateFilterData, resetFilter } = actions;

export default reducer;
