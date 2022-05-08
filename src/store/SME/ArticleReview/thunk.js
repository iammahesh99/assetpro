import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getUserList as getUserListApi } from "../../api/users";
import { handleApiResponse } from "../../..//util/api_helper";
import { getArticleList as getArticleApi } from "../../../api/articles";

export const getArticleList = createAsyncThunk(
  "getArticle/articleData",
  async (_args) => {
    try {
      const response = await getArticleApi();
      const result = await response.json();
      if (response.ok) {
        return result.webscrapper_header_articles;
      }
    } catch (e) {
      console.log(e);
    }
  }
);
