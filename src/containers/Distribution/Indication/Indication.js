import { Box, Divider } from "@mui/material";
import LargeHeading from "../../../components/Heading";
import AdvanceFilter from "../../Home/AdvanceFilter";
import IndicationHeader from "./IndicationHeader";
import IndicationContent from "./IndicationContent";

const Indication = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: "0px 0px 8px 0px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <LargeHeading variant="h6" label="Indication" />
        <AdvanceFilter />
      </Box>
      <Divider sx={{ marginBottom: "5px" }} />
      <IndicationHeader />
      <IndicationContent />
    </Box>
  );
};

export default Indication;
