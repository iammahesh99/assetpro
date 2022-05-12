import { Box, Typography } from "@mui/material";
import ComparisionHeader from "./ComparisionHeader";
import ComparisionTable from "./ComparisionTable";
import { CommonWrapper, HeadingStyle } from "../CommonStyle";
import CustomCarousel from "../../components/CustomCarousel";
import { images } from "../../api/mockdata/HomeImage";
const Comparision = () => {
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
          Comparision
        </Typography>
      </HeadingStyle>
      <CommonWrapper>
        <ComparisionHeader />
        <ComparisionTable />
      </CommonWrapper>
    </Box>
  );
};

export default Comparision;
