import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserList as getUserListApi } from "../../api/users";
import { handleApiResponse } from "../../util/api_helper";

export const getUserList = createAsyncThunk(
  "getUser/userdata",
  async (_args) => {
    try {
      const response = await getUserListApi();
      const result = await response.json();
      console.log("result", result);
      // if (response.ok) {
      //   return result.webscrapper_header_articles;
      // }
    } catch (e) {
      console.log(e);
    }
  }
);
