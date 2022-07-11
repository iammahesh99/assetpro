import {
  PermIdentityOutlined,
  NotificationsNoneSharp,
} from "@mui/icons-material";
import { Badge, Box, styled, Typography, AppBar, Toolbar } from "@mui/material";
import React from "react";
import LargeHeading from "../components/Heading";
import Sidebar from "./Sidebar";
import KeyCloakConfig from "../config/keycloak";
import { useSelector } from "react-redux";

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "60px",
  [theme.breakpoints.down("laptop")]: {
    gap: "10px",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  paddingRight: "60px",
  [theme.breakpoints.down("laptop")]: {
    paddingRight: "0px",
  },
}));

const Navbar = () => {
  const userStatus = useSelector(
    (state) => state.userPreferenceData.userStatus
  );
  return (
    <AppBar position="fixed" color="secondary" elevation={1}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: { tablet: 0, laptop: 2 },
        }}
      >
        <LargeHeading variant="h6" label="Asset Pro" />
        <Sidebar />
        <Icons>
          {userStatus === "Preference already added" ? (
            <Badge badgeContent="4" color="error">
              <NotificationsNoneSharp fontSize="medium" />
            </Badge>
          ) : null}
          <UserBox>
            <PermIdentityOutlined fontSize="medium" />
            <Typography variant="navbarItem">
              {KeyCloakConfig.getUsername()}
            </Typography>
            <button
              variant="navbarItem"
              onClick={(e) => KeyCloakConfig.doLogout()}
            >
              Log Out
            </button>
          </UserBox>
        </Icons>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
