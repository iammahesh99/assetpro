import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
  datasets: [
    {
      label: "# of Votes",
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const RadarChart = () => {
  const navigate = useNavigate();
  const handleClick = (evt, element) => {
    if (element.length > 0) {
      navigate("/comparision");
      console.log(element);
    }
  };
  return (
    <Radar
      data={data}
      height={50}
      options={{
        onClick: handleClick,
      }}
    />
  );
};

export default RadarChart;
