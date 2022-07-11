import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Routes } from "../util/routes";
import SideBarItem from "./SideBarItem";

const Sidebar = () => {
  const userStatus = useSelector(
    (state) => state.userPreferenceData.userStatus
  );
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {userStatus === "Preference already added" ? (
        <SideBarItem Route={Routes} />
      ) : null}
    </Box>
  );
};
export default Sidebar;
