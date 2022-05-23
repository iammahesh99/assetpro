import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);
const scatterDataPlugin = {
  title: {
    display: true,
    text: "Scatter Chart",
    position: "top",
    align: "start",
  },
  tooltip: {
    callbacks: {
      label: function (context) {
        let label = context.dataset.label || "";

        if (label) {
          label += ": ";
        }
        if (context.parsed.y !== null) {
          label += "x:" + context.parsed.x + "y:" + context.parsed.y;
        }
        return label;
      },
    },
  },
};

export const options = {
  scales: {
    x: {
      beginAtZero: true,
      grace: "3%",
    },
    y: {
      beginAtZero: true,
      grace: "3%",
    },
  },

  plugins: scatterDataPlugin,
  animation: {
    onComplete: function ({ chart }) {
      var { ctx } = chart;
      ctx.save();
      ctx.font = "12px sans-serif";
      for (let x = 0; x < chart.config.data.datasets.length; x++) {
        for (let i = 0; i < chart.config.data.datasets[x].data.length; i++) {
          let textWidth = ctx.measureText(
            chart.config.data.datasets[x].data[i].status
          ).width;

          ctx.fillText(
            chart.config.data.datasets[x].data[i].status,
            chart.getDatasetMeta(x).data[i].x - textWidth / 2,
            chart.getDatasetMeta(x).data[i].y - 18
          );
          ctx.fillStyle = "#000000";
        }
      }

      ctx.restore();
    },
  },
};

export const data = {
  labels: ["mahesh", "pandey", "hello"],
  datasets: [
    {
      label: "Phase1",

      data: [
        { x: 5, y: 5, r: 20, status: "point 1" },
        { x: 1, y: 3, r: 20, status: "point 2" },
        { x: 8, y: 4, r: 20, status: "point 3" },
        { x: 9, y: 6, r: 20, status: "point 4" },
        { x: 3, y: 10, r: 20, status: "point 5" },
        { x: 2, y: 12, r: 20, status: "point 6" },
      ],
      backgroundColor: "#83eb34",
      pointRadius: 8,
      pointHoverRadius: 12,
    },
    {
      label: "Phase2",
      data: [
        { x: 6, y: 6, r: 20, status: "point 1" },
        { x: 7, y: 8, r: 20, status: "point 2" },
        { x: 9, y: 10, r: 20, status: "point 3" },
        { x: 1, y: 6, r: 20, status: "point 4" },
        { x: 2, y: 7, r: 20, status: "point 5" },
        { x: 4, y: 9, r: 20, status: "point 6" },
      ],
      backgroundColor: "#72c0ed",
      pointRadius: 8,
      pointHoverRadius: 12,
    },
    {
      label: "Phase3",
      data: [
        { x: 1, y: 8, r: 20, status: "point 1" },
        { x: 2, y: 4, r: 20, status: "point 2" },
        { x: 2, y: 10, r: 20, status: "point 3" },
        { x: 3, y: 2, r: 20, status: "point 4" },
        { x: 3, y: 6, r: 20, status: "point 5" },
        { x: 7, y: 4, r: 20, status: "point 6" },
      ],
      backgroundColor: "#f58032",
      pointRadius: 8,
      pointHoverRadius: 12,
      pointStyle: "rect",
    },
  ],
};

const ScatterChart = () => {
  return <Scatter options={options} data={data} />;
};
export default ScatterChart;
