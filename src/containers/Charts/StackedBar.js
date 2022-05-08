import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
  },
  scales: {
    x: {
      stacked: true,
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const labels = ["JSP191", "CPX-351", "Tak-569", "Media7276", "LAVA091"];

export const data = {
  labels,
  datasets: [
    {
      label: "Phase 1",
      data: [10, 10, 10, 10, 10],
      backgroundColor: "#4532f5",
    },
    {
      label: "Phase 2",
      data: [20, 20, 20, 20, 20],
      backgroundColor: "#f58032",
    },
    {
      label: "Phase 3",
      data: [30, 30, 30, 30, 30],
      backgroundColor: "#938e8b",
    },
  ],
};

const StackedBar = () => {
  return <Bar options={options} data={data} />;
};
export default StackedBar;
