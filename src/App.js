import Sidebar from "./containers/Sidebar";
import Mainpage from "./containers/Mainpage";
import { Box, Stack } from "@mui/material";
import Navbar from "./containers/Navbar";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { getUserList } from "./store/userdata/thunk";
// import { API_STATUS } from "./util/api_helper";

function App() {
  // const loadStatus = useSelector((state) => state.userData.loadStatus);
  // const userData = useSelector((state) => state.userData.data);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (loadStatus === API_STATUS.IDLE) {
  //     dispatch(getUserList());
  //   }
  //   if (loadStatus === API_STATUS.COMPLETED) {
  //     console.log(userData, "Userdata");
  //   }
  // }, [loadStatus]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Box sx={{ backgroundColor: "#f2f2f2" }}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
        <Sidebar />
        <Mainpage />
      </Stack>
    </Box>
  );
}

export default App;
