import { Box, Paper, Typography, styled } from "@mui/material";
import BarExample from "../Charts/BarExample";

import RadarChart from "../Charts/Radar";
export const ChartWrap = styled(Paper)(({ theme }) => ({
  background: theme.palette.secondary.main,
  padding: "0% 3% 3% 3%",
  marginBottom: "5%",
}));

const Landingpage = () => {
  return (
    <Box flex={4}>
      <ChartWrap variant="outlined">
        <Typography variant="h6"> Bar Chart</Typography>
        <BarExample />
      </ChartWrap>
      <ChartWrap variant="outlined">
        <Typography variant="h6"> Radar Chart</Typography>
        <RadarChart />
      </ChartWrap>
    </Box>
  );
};
export default Landingpage;

// <iframe
//   src="http://3.110.254.66:5601/app/visualize#/edit/7a3a7a60-cc9c-11ec-a73e-113a7aa104e9?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!f%2Cvalue%3A900000)%2Ctime%3A(from%3Anow-1y%2Cto%3Anow))"
//   height="600"
//   width="800"
// ></iframe>
