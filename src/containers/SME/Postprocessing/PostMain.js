import { Box, Divider } from "@mui/material";

import LargeHeading from "../../../components/Heading";
import PostProcessing from "./PostProcessing";
import PremainHeader from "../Preprocessing/PremainHeader";
import { CommonWrapper } from "../../CommonStyle";

const PostMain = () => {
  return (
    <Box>
      <CommonWrapper>
        <Box
          sx={{
            padding: "0% 0% 1% 0%",
          }}
        >
          <LargeHeading variant="h6" label="Post Processing" />
        </Box>
        <Divider variant="inset" />
        <PremainHeader />
        <PostProcessing />
      </CommonWrapper>
    </Box>
  );
};

export default PostMain;
