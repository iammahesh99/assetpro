import { Box, Typography } from "@mui/material";
import { CommonWrapper } from "../CommonStyle";
import CustomCarousel from "../../components/CustomCarousel";
import { images } from "../../api/mockdata/HomeImage";
import UserSelection from "./userSelection";
import DetailContainer from "./DetailContainer";

const Onboarding = () => {
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
        <UserSelection />
        <DetailContainer />
      </CommonWrapper>
    </Box>
  );
};

export default Onboarding;
