import { Box, Typography } from "@mui/material";
import PerformanceHeader from "../Performance/PerformanceHeader";
import ArticleDetailContent from "../SME/ArticleReview/ArticleDetail/ArticleDetailContent";
import ArticleTableDetail from "../SME/ArticleReview/ArticleDetail/ArticleTableDetail";
import { CommonWrapper, HeadingStyle } from "../CommonStyle";
import CustomCarousel from "../../components/CustomCarousel";
import { images } from "../../api/mockdata/HomeImage";

const AssetProfile = () => {
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
          Asset Profile
        </Typography>
      </HeadingStyle>
      <CommonWrapper>
        <PerformanceHeader />
        <ArticleTableDetail />
        <ArticleDetailContent />
      </CommonWrapper>
    </Box>
  );
};

export default AssetProfile;
