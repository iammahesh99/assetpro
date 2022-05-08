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
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
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
      width={100}
      height={50}
      options={{
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
