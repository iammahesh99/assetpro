import { Box, Stack } from "@mui/material";
import Landingpage from "./Landingpage";
import Newsroom from "./Newsroom";

const Home = () => {
  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Landingpage />
        <Newsroom />
      </Stack>
    </Box>
  );
};

export default Home;
