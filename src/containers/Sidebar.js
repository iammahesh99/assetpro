import { Box, styled, Divider, Typography } from "@mui/material";
import { Routes } from "../util/routes";
import { useNavigate } from "react-router-dom";
import { CommonWrapper } from "./CommonStyle";

const ListItemWrap = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  "&:hover": {
    background: theme.palette.backgoundGrad.mainGradient,
    color: theme.palette.secondary.main,
    cursor: "pointer",
  },
}));

const SideBarItem = () => {
  const navigate = useNavigate();
  return Routes.map((data) => (
    <Box key={data.id}>
      <ListItemWrap
        padding={2}
        onClick={(e) => {
          navigate(data.path);
        }}
      >
        {data.icon}
        <Typography variant="span">{data.name}</Typography>
      </ListItemWrap>
      <Divider variant="inset" />
    </Box>
  ));
};

const Sidebar = () => {
  return (
    <CommonWrapper
      flex={1}
      stylewrapper={{
        borderRadius: "0px 10px 10px 0px",
      }}
    >
      {SideBarItem()}
    </CommonWrapper>
  );
};
export default Sidebar;
