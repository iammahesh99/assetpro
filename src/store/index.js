import { configureStore } from "@reduxjs/toolkit";
import userListReducers from "./userdata/slice";
import articleReducers from "./SME/ArticleReview/slice";
import filterReducer from "./AdvanceFilter/slice";
import bullSeyaReducer from "./Chart/Bullseya/slice";
import onboardingreducer from "./Onboarding/slice";
import userPreferennceReducer from "./UserPreference/slice";

export default configureStore({
  reducer: {
    userData: userListReducers,
    articleData: articleReducers,
    filterData: filterReducer,
    bullseyaData: bullSeyaReducer,
    onboardingdata: onboardingreducer,
    userPreferenceData: userPreferennceReducer,
  },
});
