import { Box, Divider } from "@mui/material";
import AdvanceFilter from "../Home/AdvanceFilter";
import LargeHeading from "../../components/Heading";
import ComparisionHeader from "./ComparisionHeader";
import ComparisionTable from "./ComparisionTable";
const Comparision = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: "0% 0% 1% 0%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <LargeHeading variant="h6" label="Comparision" />
        <AdvanceFilter />
      </Box>
      <Divider variant="inset" sx={{ marginBottom: "5px" }} />
      <ComparisionHeader />
      <ComparisionTable />
    </Box>
  );
};

export default Comparision;
