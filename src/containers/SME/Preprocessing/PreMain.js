import { Box, Divider } from "@mui/material";
import AdvanceFilter from "../../Home/AdvanceFilter";
import LargeHeading from "../../../components/Heading";
import Preprocessing from "./Preprocessing";
import PremainHeader from "./PremainHeader";

const PreMain = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: "0% 0% 1% 0%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <LargeHeading variant="h6" label="Pre Processing" />
        <AdvanceFilter />
      </Box>
      <Divider variant="inset" />
      <PremainHeader />
      <Preprocessing />
    </Box>
  );
};

export default PreMain;
