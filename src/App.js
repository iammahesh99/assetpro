import Mainpage from "./containers/Mainpage";
import { Box } from "@mui/material";
import Navbar from "./containers/Navbar";
import AdvanceFilter from "./components/AdvanceFilter";
// import KeyCloakConfig from "./config/keycloak";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { getUserList } from "./store/userdata/thunk";
// import { API_STATUS } from "./util/api_helper";
// import { getArticleList } from "./store/SME/ArticleReview/thunk";

function App() {
  // const loadStatus = useSelector((state) => state.articleData.loadStatus);
  // const userData = useSelector((state) => state.articleData.data);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (loadStatus === API_STATUS.IDLE) {
  //     dispatch(getArticleList());
  //   }
  //   if (loadStatus === API_STATUS.COMPLETED) {
  //     console.log(userData, "Userdata");
  //   }
  // }, [loadStatus]); // eslint-disable-line react-hooks/exhaustive-deps

  // console.log(KeyCloakConfig.isLoggedIn(), "login");
  // console.log(KeyCloakConfig.getUsername(), "username");

  return (
    <Box>
      <Navbar />

      <AdvanceFilter />
      <Mainpage />
    </Box>
  );
}

export default App;
