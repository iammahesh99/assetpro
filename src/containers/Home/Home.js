import { Box, Stack, Typography } from "@mui/material";
import Landingpage from "./Landingpage";
import SideContent from "./SideContent";
import LargeHeading from "../../components/Heading";
import { CommonWrapper } from "../CommonStyle";
import CustomCarousel from "../../components/CustomCarousel";
import { images } from "../../api/mockdata/HomeImage";

const Home = () => {
  return (
    <Box>
      <CustomCarousel images={images} height="350px" />
      <Box
        sx={{
          position: "absolute",
          top: "17%",
          right: "16%",
          width: "20%",
        }}
      >
        <Typography variant="h3" color="secondary">
          This is heading
        </Typography>
        <Typography variant="navbarItem" color="secondary">
          This is content part to show the relavent data kksdhjkdjkhs jkbasjbj
          hashj ashjbjb hjashj
        </Typography>
      </Box>
      <CommonWrapper>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Landingpage />
          <SideContent />
        </Stack>
      </CommonWrapper>
    </Box>
  );
};

export default Home;
