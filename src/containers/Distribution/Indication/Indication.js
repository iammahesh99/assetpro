import { Box, Typography } from "@mui/material";
import IndicationHeader from "./IndicationHeader";
import IndicationContent from "./IndicationContent";
import { CommonWrapper, HeadingStyle } from "../../CommonStyle";
import CustomCarousel from "../../../components/CustomCarousel";
import { images } from "../../../api/mockdata/HomeImage";

const Indication = () => {
  return (
    <Box>
      <CustomCarousel images={images} height="200px" />
      <HeadingStyle>
        <Typography
          variant="h4"
          color="secondary"
          sx={{
            borderBottom: "4px solid #eba834",
          }}
        >
          Indication
        </Typography>
      </HeadingStyle>
      <CommonWrapper>
        <IndicationHeader />
        <IndicationContent />
      </CommonWrapper>
    </Box>
  );
};

export default Indication;
