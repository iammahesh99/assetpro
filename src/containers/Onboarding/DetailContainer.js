import { styled, Paper, Typography } from "@mui/material";
import { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
const ListItemWrap = styled(ListItemButton)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "1%",
  "&:hover": {
    borderBottom: "2px solid",
    borderColor: theme.palette.outline.main,
    cursor: "pointer",
    backgroundColor: "#FFFFFF",
    color: theme.palette.outline.main,
    fontWeight: "bold",
  },
}));
const ListWrap = styled(Paper)(({ theme, style }) => ({
  display: "flex",
  marginTop: "2%",
  "&& .Mui-selected": {
    borderBottom: "2px solid",
    borderColor: theme.palette.outline.main,
    color: theme.palette.outline.main,
    fontWeight: "bold",
    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
  },
}));

const DetailContainer = () => {
  return (
    <ListWrap elevation={2}>
      <ListItemWrap onClick={(e) => {}}>
        <Typography variant="navbarItem">What is Asset Pro</Typography>
      </ListItemWrap>
      <ListItemWrap selected onClick={(e) => {}}>
        <Typography variant="navbarItem">How Does it Work</Typography>
      </ListItemWrap>
      <ListItemWrap onClick={(e) => {}}>
        <Typography variant="navbarItem">User manual</Typography>
      </ListItemWrap>
      <ListItemWrap onClick={(e) => {}}>
        <Typography variant="navbarItem">Video</Typography>
      </ListItemWrap>
      <ListItemWrap onClick={(e) => {}}>
        <Typography variant="navbarItem">FAQ</Typography>
      </ListItemWrap>
    </ListWrap>
  );
};
export default DetailContainer;
