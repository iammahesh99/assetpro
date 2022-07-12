import { Box, styled, Typography } from "@mui/material";
//import Charts from "../Charts/Charts";
import UserSelectionPart from "./UserSelectionPart";
import RecentNews from "./RecentNews";
const LeftVerticalbox = styled(Box)(({ theme }) => ({
  width: "10px",
  height: "100%",
  backgroundColor: theme.palette.outline.main,
  marginRight: "4px",
}));
const LeftVerticalboxSecond = styled(Box)(({ theme }) => ({
  width: "7px",
  height: "100%",
  backgroundColor: theme.palette.outline.main,
  marginRight: "10px",
}));

const Landingpage = () => {
  return (
    <Box flex={4}>
      <UserSelectionPart />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#EAEFF2",
          height: "5%",
          marginBottom: "2%",
        }}
      >
        <LeftVerticalbox />
        <LeftVerticalboxSecond />
        <Typography variant="h5" color="outline.main">
          Recent News
        </Typography>
      </Box>
      <RecentNews />
    </Box>
  );
};
export default Landingpage;
