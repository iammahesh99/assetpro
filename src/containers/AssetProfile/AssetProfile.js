import { Box, Divider } from "@mui/material";
import LargeHeading from "../../components/Heading";
import AdvanceFilter from "../Home/AdvanceFilter";
import PerformanceHeader from "../Performance/PerformanceHeader";
import ArticleDetailContent from "../SME/ArticleReview/ArticleDetail/ArticleDetailContent";
import ArticleTableDetail from "../SME/ArticleReview/ArticleDetail/ArticleTableDetail";

const AssetProfile = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: "0px 0px 8px 0px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <LargeHeading variant="h6" label="Asset Profile" />
        <AdvanceFilter />
      </Box>
      <Divider sx={{ marginBottom: "5px" }} />
      <PerformanceHeader />
      <ArticleTableDetail />
      <ArticleDetailContent />
    </Box>
  );
};

export default AssetProfile;
