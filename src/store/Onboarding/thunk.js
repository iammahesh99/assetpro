import { createAsyncThunk } from "@reduxjs/toolkit";
import { get_all_ta_and_indication as get_all_ta_and_indicationApi } from "../../api/onboardingdata";
import { handleApiResponse } from "../../util/api_helper";

export const getAllTaIndication = createAsyncThunk(
  "getAll/TaIndication",
  async (token, _args) => {
    try {
      const response = await get_all_ta_and_indicationApi(token);
      const result = await response.json();
      if (response.ok) {
        return result.Value;
      }
    } catch (e) {
      console.log(e);
    }
  }
);
