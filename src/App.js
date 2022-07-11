import Mainpage from "./containers/Mainpage";
import { useEffect } from "react";
import { Box } from "@mui/material";
import Navbar from "./containers/Navbar";
import FilterPresentationPage from "./containers/AdvanceFilter/FilterPresentationPage";
import Onboarding from "./containers/Onboarding/Onboading";
import KeyCloakConfig from "./config/keycloak";
import { useDispatch, useSelector } from "react-redux";
import { getUserPreference } from "./store/UserPreference/thunk";
import { API_STATUS } from "./util/api_helper";

function App() {
  // console.log(KeyCloakConfig.getToken(), "token");

  const loadStatus = useSelector(
    (state) => state.userPreferenceData.loadStatus
  );

  const userStatus = useSelector(
    (state) => state.userPreferenceData.userStatus
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (loadStatus === API_STATUS.IDLE) {
      dispatch(getUserPreference(KeyCloakConfig.getToken()));
    }
  }, [loadStatus]); // eslint-disable-line react-hooks/exhaustive-deps
  console.log(userStatus, "userStatus");
  return (
    <Box>
      <Navbar />

      <FilterPresentationPage />
      <Onboarding />
    </Box>
  );
}

export default App;
