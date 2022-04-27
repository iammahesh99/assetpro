import { Box, styled } from "@mui/material";
import Home from "./Home/Home";

const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  marginTop: "80px",
  minHeight: "90vh",
  marginRight: "1%",
  borderRadius: "20px 20px 20px 20px",
  boxShadow: "0px 0px 4px rgba(0,0,0,0.1),0px 1px 2px rgba(0, 0, 0, 0.1)",
  padding: "2%",
}));
const Mainpage = () => {
  return (
    <Box flex={5}>
      <MainBox>
        <Home />
      </MainBox>
    </Box>
  );
};
export default Mainpage;
