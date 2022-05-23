import { Box, Paper, styled } from "@mui/material";
import PieChart from "../Charts/PieChart";
import StackedBar from "../Charts/StackedBar";
import ScatterChart from "../Charts/ScatterChart";
import BullSeyaChart from "../Charts/BullSeyaChart";
import React from "react";

import { ChartWrap } from "../CommonStyle";

const Charts = () => {
  return (
    <Box flex={4}>
      <ChartWrap variant="outlined">
        <ScatterChart />
      </ChartWrap>
      <ChartWrap variant="outlined">
        <BullSeyaChart />
      </ChartWrap>
    </Box>
  );
};
export default Charts;
