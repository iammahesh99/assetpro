import {
  PermIdentityOutlined,
  NotificationsNoneSharp,
} from "@mui/icons-material";
import { Badge, Box, styled, Typography } from "@mui/material";
import React, { useState } from "react";

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
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "0px 0px 10px 10px",
        boxShadow: "0px 0px 4px rgba(0,0,0,0.1),0px 1px 2px rgba(0, 0, 0, 0.1)",
      }}
      p={2}
    >
      <Typography variant="span">Asset Pro</Typography>
      <Icons>
        <Badge badgeContent="4" color="error">
          <NotificationsNoneSharp fontSize="medium" />
        </Badge>
        <UserBox>
          <PermIdentityOutlined fontSize="medium" />
          <Typography variant="h7">User Name</Typography>
        </UserBox>
      </Icons>
    </Box>
  );
};

export default Navbar;
