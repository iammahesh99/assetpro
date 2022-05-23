import Mainpage from "./containers/Mainpage";
import { Box } from "@mui/material";
import Navbar from "./containers/Navbar";
import FilterPresentationPage from "./containers/AdvanceFilter/FilterPresentationPage";

function App() {
  // console.log(KeyCloakConfig.isLoggedIn(), "login");
  // console.log(KeyCloakConfig.getUsername(), "username");

  return (
    <Box>
      <Navbar />

      <FilterPresentationPage />
      <Mainpage />
    </Box>
  );
}

export default App;
