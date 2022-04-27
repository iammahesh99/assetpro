import { Box, styled, Divider, Typography } from "@mui/material";
import {
  PermIdentityOutlined,
  NotificationsNoneSharp,
} from "@mui/icons-material";
const SideBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  marginTop: "80px",
  minHeight: "90vh",
  borderRadius: "0px 20px 20px 0px",
  boxShadow: "0px 0px 4px rgba(0,0,0,0.1),0px 1px 2px rgba(0, 0, 0, 0.1)",
}));

const ListItemWrap = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  "&:hover": {
    background: theme.palette.backgoundGrad.mainGradient,
    color: theme.palette.secondary.main,
  },
}));

const topDealsData = [
  { id: 1, content: "Home " },
  { id: 2, content: " SME Review " },
  { id: 3, content: "Comparision " },
  { id: 4, content: " Performance " },
];

const SideBarItem = () => {
  return topDealsData.map((data) => (
    <Box key={data.id}>
      <ListItemWrap padding={2}>
        <PermIdentityOutlined fontSize="medium" />
        <Typography>{data.content}</Typography>
      </ListItemWrap>
      <Divider variant="inset" />
    </Box>
  ));
};

const Sidebar = () => {
  return (
    <Box flex={1}>
      <SideBox>{SideBarItem()}</SideBox>
    </Box>
  );
};
export default Sidebar;
