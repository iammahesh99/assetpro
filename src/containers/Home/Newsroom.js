import { Box } from "@mui/material";
import NewsCard from "../../components/NewsCard";
import TopDeals from "./TopDeal";

const Newsroom = () => {
  return (
    <Box flex={2}>
      <NewsCard content={<TopDeals />} header="TOP DEALS" />
      <NewsCard content={<TopDeals />} header="HOT OPPORTUNITIES" />
    </Box>
  );
};
export default Newsroom;
