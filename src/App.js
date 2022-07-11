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
import LoadingPage from "./components/MiscPages/LoadingPage";

function App() {
  let content = <LoadingPage />;
  const { loadStatus, userStatus } = useSelector(
    (state) => state.userPreferenceData
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (loadStatus === API_STATUS.IDLE) {
      dispatch(getUserPreference(KeyCloakConfig.getToken()));
    }
  }, [loadStatus]); // eslint-disable-line react-hooks/exhaustive-deps
  if (loadStatus === API_STATUS.COMPLETED) {
    content =
      userStatus === "Preference already added" ? (
        <>
          <FilterPresentationPage />
          <Mainpage />
        </>
      ) : (
        <>
          <Onboarding />
        </>
      );
  }
  return (
    <Box>
      <Navbar />
      {content}
    </Box>
  );
}

export default App;
