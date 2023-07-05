
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



function LChart({data, location}) {

  const colors = ["black", "blue", "green"]

  const renderedLines = location.map((location, i) => {
    return <Line key={location} type="monotone" dataKey={location} stroke={colors[i]} />
  })


  return (
      <LineChart
        width={600}
        height={500}
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
        <YAxis />
        <Tooltip />
        <Legend />
        {renderedLines}
      </LineChart>
  );
}
export default LChart;