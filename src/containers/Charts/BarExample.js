import React from "react";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "JSP191",
    "CPX-351",
    "Tak-569",
    "Media7276",
    "LAVA191",
    "CPX-351",
    "Tak-569",
  ],
  datasets: [
    {
      label: "Asset",
      backgroundColor: "#4532f5",
      borderCapStyle: "round",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const BarExample = () => {
  const navigate = useNavigate();
  const handleClick = (evt, element) => {
    if (element.length > 0) {
      navigate("/comparision");
    }
  };

  return (
    <Bar
      data={data}
      height="300px"
      options={{
        maintainAspectRatio: false,
        responsive: true,
        onClick: handleClick,
        scales: {
          x: {
            grid: {
              display: false,
            },
            beginAtZero: true,
          },
          y: {
            grid: {
              display: false,
            },
            beginAtZero: true,
          },
        },
      }}
    />
  );
};

export default BarExample;
