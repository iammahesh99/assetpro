import { configureStore } from "@reduxjs/toolkit";
import userListReducers from "./userdata/slice";

export default configureStore({
  reducer: {
    userData: userListReducers,
  },
});
