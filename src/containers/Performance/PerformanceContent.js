import { Paper } from "@mui/material";
import BubbleExample from "../Charts/BubbeExample";
import { ChartWrap } from "../CommonStyle";
import LargeHeading from "../../components/Heading";
const PerformanceContent = () => {
  return (
    <Paper sx={{ width: "70%" }}>
      <ChartWrap variant="outlined">
        <LargeHeading variant="h6" label="Asset Performance" />
        <BubbleExample />
      </ChartWrap>
    </Paper>
  );
};
export default PerformanceContent;
