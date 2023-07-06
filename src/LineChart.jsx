
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function LChart({data, location}) {

  const colors = ["black", "blue", "green", "red", "purple", "orange", "yellow"]

  const renderedLines = location.map((location, i) => {
    return <Line key={location} type="monotone" dataKey={location} stroke={colors[i] || "#000"} />
  })


  return (
      <LineChart
        width={1000}
        height={600}
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={['dataMin - 100', 'dataMax + 100']} />
        <Tooltip />
        <Legend />
        {renderedLines}
      </LineChart>
  );
}
export default LChart;