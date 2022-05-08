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
      label: "My First dataset",
      data: [
        { x: 0, y: 0, r: 0 },
        { x: 10, y: 5, r: 15 },
        { x: 13, y: 10, r: 15 },
        { x: 2, y: 2, r: 20 },
        { x: 8, y: 14, r: 15 },
        { x: 15, y: 15, r: 0 },
      ],
      backgroundColor: "#000000",
    },
  ],
};

const BubbleExample = () => {
  const navigate = useNavigate();
  const handleClick = (evt, element) => {
    if (element.length > 0) {
      navigate("/comparision");
    }
  };
  return (
    <div>
      <Bubble
        data={data}
        options={{
          onClick: handleClick,
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
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
