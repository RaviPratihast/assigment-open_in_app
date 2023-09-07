import React from "react";
import { Pie } from "react-chartjs-2";

export const PieChart = ({ chartData }) => {
  return (
    <div className="h-40 flex justify-center w-full">
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: "Users Gained between 2016-2020",
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
