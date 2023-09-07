import React, { useState } from "react";
import { Data } from "../../utils/data";
import { BarChart } from "./BarChart";
import { PieChart } from "./PieChart";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);
const initialState = {
  labels: Data.map((data) => data.week),
  datasets: [
    {
      label: "User",
      data: Data.map((data) => data.user),
      backgroundColor: "#98D89E",
      barPercentage: 0.5,
      categoryPercentage: 1,
      barThickness: 30,
      maxBarThickness: 40,
      // minBarLength: 21,
      borderRadius: 7,
      maintainAspectRatio: false,
      responsive: true,
    },
    {
      label: "Guest",
      data: Data.map((data) => data.guest),
      backgroundColor: "#EE8484",
      barPercentage: 0.5,
      categoryPercentage: 1,
      barThickness: 30,
      maxBarThickness: 40,
      minBarLength: 21,
      borderRadius: 7,
      maintainAspectRatio: false,
      responsive: true,
    },
  ],
};

const BarChartLayout = () => {
  const [barChartData] = useState(initialState);

  return (
    <div>
      <BarChart chartData={barChartData} />
    </div>
  );
};
const PieChartLayout = () => {
  const [pieChartData] = useState(initialState);

  return (
    <div>
      <PieChart chartData={pieChartData} />
    </div>
  );
};

export { BarChartLayout, PieChartLayout };
