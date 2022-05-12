import { Box } from "@mui/material";
import { Routes } from "../util/routes";
import SideBarItem from "./SideBarItem";

const Sidebar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <SideBarItem Route={Routes} />
    </Box>
  );
};
export default Sidebar;
