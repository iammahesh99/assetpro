import { Box } from "@mui/material";
import NewsCard from "../../components/NewsCard";
import TopDeals from "./TopDeal";

const SideContent = () => {
  return (
    <Box flex={2}>
      <NewsCard content={<TopDeals />} header="Recent Deals" />
      <NewsCard content={<TopDeals />} header="Tweet AML" />
    </Box>
  );
};
export default SideContent;
