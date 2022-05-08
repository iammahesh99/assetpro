import { Box } from "@mui/material";
import { ChartWrap } from "../../Home/Landingpage";
import StackedBar from "../../Charts/StackedBar";
import BarExample from "../../Charts/BarExample";
import RadarChart from "../../Charts/Radar";
import PieChart from "../../Charts/PieChart";

const IndicationContent = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }} mt={2}>
        <ChartWrap sx={{ width: "40%" }} variant="outlined">
          <StackedBar />
        </ChartWrap>
        <ChartWrap sx={{ width: "45%" }} variant="outlined">
          <PieChart />
        </ChartWrap>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <ChartWrap sx={{ width: "40%" }} variant="outlined">
          <BarExample />
        </ChartWrap>
        <ChartWrap sx={{ width: "45%" }} variant="outlined">
          <RadarChart />
        </ChartWrap>
      </Box>
    </Box>
  );
};
export default IndicationContent;
