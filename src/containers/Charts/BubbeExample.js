import React from "react";
import { Bubble } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["January"],
  datasets: [
    {
      label: "Efficacy",
      data: [
        { x: 5, y: 5, r: 35 },
        { x: 1, y: 3, r: 25 },
        { x: 8, y: 14, r: 0 },
      ],
      backgroundColor: "#0924df",
    },
    {
      label: "Safety",
      data: [{ x: 3, y: 10, r: 35 }],
      backgroundColor: "red",
    },
  ],
};

const BubbleExample = () => {
  const navigate = useNavigate();
  const handleClick = (evt, element) => {
    if (element.length > 0) {
      navigate("/asset_detail");
    }
  };
  return (
    <div>
      <Bubble
        data={data}
        height="300px"
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "right",
            },
          },
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
    </div>
  );
};

export default BubbleExample;

// label: "My First dataset",
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: "rgba(75,192,192,0.4)",
//       borderColor: "rgba(75,192,192,1)",
//       borderCapStyle: "round",
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: "miter",
//       pointBorderColor: "rgba(75,192,192,1)",
//       pointBackgroundColor: "#fff",
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: "rgba(75,192,192,1)",
//       pointHoverBorderColor: "rgba(220,220,220,1)",
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
