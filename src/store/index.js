import { configureStore } from "@reduxjs/toolkit";
import userListReducers from "./userdata/slice";
import articleReducers from "./SME/ArticleReview/slice";

export default configureStore({
  reducer: {
    userData: userListReducers,
    articleData: articleReducers,
  },
});
