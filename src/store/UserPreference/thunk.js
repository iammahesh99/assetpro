import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserPreference as getUserPreferenceApi } from "../../api/userPreference";
import { handleApiResponse } from "../../util/api_helper";

export const getUserPreference = createAsyncThunk(
  "getUser/preference",
  async (token, _args) => {
    try {
      const response = await getUserPreferenceApi(token);
      const result = await response.json();
      console.log("dispatch")
      if (response.ok) {
        return result.value;
      }
    } catch (e) {
      console.log(e);
    }
  }
);
