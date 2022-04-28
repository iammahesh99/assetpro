import { Box, styled } from "@mui/material";
import Home from "./Home/Home";
import { CommonWrapper } from "./CommonStyle";

const Mainpage = () => {
  return (
    <Box flex={5}>
      <CommonWrapper
        stylewrapper={{
          borderRadius: "10px 10px 10px 10px",
          padding: "2%",
          marginRight: "1%",
        }}
        flex={5}
      >
        <Home />
      </CommonWrapper>
    </Box>
  );
};
export default Mainpage;
