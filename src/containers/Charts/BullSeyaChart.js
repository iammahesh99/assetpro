import React, { useState, useEffect } from "react";
import { BullSeyaChartContext } from "./BullSeyaChartContext";
import { useSelector } from "react-redux";
import AnyChart from "anychart-react";

const BullSeyaChart = () => {
  const bullseyaData = useSelector((state) => state.bullseyaData.filterValue);
  const [chart, setChart] = useState();

  useEffect(() => {
    setChart(BullSeyaChartContext(bullseyaData));
  }, [bullseyaData]);

  return (
    <div>
      <AnyChart instance={chart} height={700} width={800} id="container" />
    </div>
  );
};
export default BullSeyaChart;
