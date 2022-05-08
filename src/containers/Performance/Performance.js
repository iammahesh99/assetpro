import { Box, Divider } from "@mui/material";
import LargeHeading from "../../components/Heading";
import AdvanceFilter from "../Home/AdvanceFilter";
import PerformanceContent from "./PerformanceContent";
import PerformanceHeader from "./PerformanceHeader";

const Performance = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: "0px 0px 8px 0px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <LargeHeading variant="h6" label="Performance" />
        <AdvanceFilter />
      </Box>
      <Divider sx={{ marginBottom: "5px" }} />
      <PerformanceHeader />
      <PerformanceContent />
    </Box>
  );
};

export default Performance;
