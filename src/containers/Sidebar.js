import { Box } from "@mui/material";
import { Routes } from "../util/routes";
import SideBarItem from "./SideBarItem";

const Sidebar = () => {
  return (
    <Box
      sx={{
        marginTop: "50px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: "10%",
      }}
    >
      <SideBarItem Route={Routes} />
    </Box>
  );
};
export default Sidebar;
