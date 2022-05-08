import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserList as getUserListApi } from "../../api/users";
import { handleApiResponse } from "../../util/api_helper";

export const getUserList = createAsyncThunk(
  "getUser/userdata",
  async (_args) => {
    try {
      const response = await getUserListApi();

      const result = await handleApiResponse(response);
      console.log(result);
      if (result.ok) {
        return result.data;
      }
    } catch (e) {
      console.log(e);
    }
  }
);
