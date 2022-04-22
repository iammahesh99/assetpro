import { Box, styled } from "@mui/material";
const SideBox = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  marginTop: "30px",
  minHeight: "90vh",
  borderRadius: "0px 20px 20px 0px",
  boxShadow: "0px 0px 4px rgba(0,0,0,0.1),0px 1px 2px rgba(0, 0, 0, 0.1)",
}));

const Sidebar = () => {
  return (
    <Box flex={1}>
      <SideBox>inside side box</SideBox>
    </Box>
  );
};
export default Sidebar;
