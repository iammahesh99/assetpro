import { Box, Stack, Typography } from "@mui/material";
import Landingpage from "./Landingpage";
import Newsroom from "./Newsroom";
import AdvanceFilter from "./AdvanceFilter";
import LargeHeading from "../../components/Heading";

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: "1% 0% 2% 0%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <LargeHeading variant="h5" label="Landing Page" />
        <AdvanceFilter />
      </Box>
      <Stack
        direction={{ laptop: "row", tablet: "column" }}
        spacing={2}
        justifyContent="space-between"
      >
        <Landingpage />
        <Newsroom />
      </Stack>
    </Box>
  );
};

export default Home;
