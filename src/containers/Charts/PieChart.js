import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Moa1", "Moa2", "Moa3", "other"],
  datasets: [
    {
      label: "",
      data: [35, 30, 13, 4],
      backgroundColor: ["#4532f5", "#f58032", "#938e8b", "#f0c917"],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return (
    <Pie
      data={data}
      options={{
        maintainAspectRatio: false,
        responsive: true,
      }}
    />
  );
};
export default PieChart;
