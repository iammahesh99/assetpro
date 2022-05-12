import { Box, Divider } from "@mui/material";
import LargeHeading from "../../../components/Heading";
import Preprocessing from "./Preprocessing";
import PremainHeader from "./PremainHeader";
import { CommonWrapper } from "../../CommonStyle";

const PreMain = () => {
  return (
    <Box>
      <CommonWrapper>
        <Box
          sx={{
            padding: "0% 0% 1% 0%",
          }}
        >
          <LargeHeading variant="h6" label="Pre Processing" />
        </Box>
        <Divider variant="inset" />
        <PremainHeader />
        <Preprocessing />
      </CommonWrapper>
    </Box>
  );
};

export default PreMain;
