import React from "react";
import { Pie } from "react-chartjs-2";

export const PieChart = ({ chartData }) => {
  return (
    <div className="flex justify-center w-full">
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};
