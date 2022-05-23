import { createSlice } from "@reduxjs/toolkit";
import { BullseyaData } from "../../../api/mockdata/BullseyaChart";

const bullseyaSlice = createSlice({
  name: "bullseyaSlice",
  initialState: {
    initialBullseyaData: BullseyaData,
    filterValue: BullseyaData,
    //chart: null,
  },
  reducers: {
    filterChart: (state, action) => {
      const currentFilterdata = action.payload;
      console.log(currentFilterdata);
      state.filterValue = state.initialBullseyaData.filter((data) =>
        currentFilterdata.includes(data.Modalities)
      );
    },
  },
});
const { reducer, actions } = bullseyaSlice;
export const { filterChart } = actions;

export default reducer;
