import {
  PermIdentityOutlined,
  NotificationsNoneSharp,
} from "@mui/icons-material";
import { Badge, Box, styled, Typography, AppBar, Toolbar } from "@mui/material";
import React, { useState } from "react";
import LargeHeading from "../components/Heading";

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "60px",
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  paddingRight: "60px",
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <LargeHeading variant="h6" label="Asset Pro" />
        <Icons>
          <Badge badgeContent="4" color="error">
            <NotificationsNoneSharp fontSize="medium" />
          </Badge>
          <UserBox>
            <PermIdentityOutlined fontSize="medium" />
            <Typography variant="h7">User Name</Typography>
          </UserBox>
        </Icons>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
