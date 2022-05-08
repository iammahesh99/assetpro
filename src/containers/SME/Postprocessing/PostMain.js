import { Box, Divider } from "@mui/material";
import AdvanceFilter from "../../Home/AdvanceFilter";
import LargeHeading from "../../../components/Heading";
import PostProcessing from "./PostProcessing";
import PremainHeader from "../Preprocessing/PremainHeader";

const PostMain = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: "0% 0% 1% 0%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <LargeHeading variant="h6" label="Post Processing" />
        <AdvanceFilter />
      </Box>
      <Divider variant="inset" />
      <PremainHeader />
      <PostProcessing />
    </Box>
  );
};

export default PostMain;
