import React, { useState, useEffect } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(...registerables);

const ChartComponent = () => {
  const [data, setData] = useState({
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        label: "Response Time (ms)",
        data: [200, 400, 350, 600, 500, 400, 350],
        borderColor: "red",
        borderWidth: 2,
        fill: true,
        tension: 0.4
      },
    ],
  });

  return (
    <div>
      <h2>Response Time</h2>
      <Line data={data} />
    </div>
  );
};

export default ChartComponent;
