import { Box, Typography } from "@mui/material";
import PerformanceContent from "./PerformanceContent";
import PerformanceHeader from "./PerformanceHeader";
import { CommonWrapper } from "../CommonStyle";
import { images } from "../../api/mockdata/HomeImage";
import CustomCarousel from "../../components/CustomCarousel";
import { HeadingStyle } from "../CommonStyle";

const Performance = () => {
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
          Performance
        </Typography>
      </HeadingStyle>
      <CommonWrapper>
        <PerformanceHeader />
        <PerformanceContent />
      </CommonWrapper>
    </Box>
  );
};

export default Performance;
