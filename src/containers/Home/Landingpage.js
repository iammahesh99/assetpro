import { Box, Paper, Typography, styled } from "@mui/material";
import BarExample from "../Charts/BarExample";
// import BubbleExample from "../Charts/BubbeExample";
import RadarChart from "../Charts/Radar";
const ChartWrap = styled(Paper)(({ theme }) => ({
  background: theme.palette.secondary.main,
  padding: "0% 3% 3% 3%",
  marginBottom: "5%",
}));

const Landingpage = () => {
  return (
    <Box flex={4}>
      <ChartWrap variant="outlined">
        <Typography variant="h6"> Bar Chart</Typography>
        <BarExample />
      </ChartWrap>
      <ChartWrap variant="outlined">
        <Typography variant="h6"> Radar Chart</Typography>
        <RadarChart />
      </ChartWrap>
    </Box>
  );
};
export default Landingpage;
