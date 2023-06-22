// components/BarChart.js
import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Emloyment</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Employment Figures From U.S. Census.Gov"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};