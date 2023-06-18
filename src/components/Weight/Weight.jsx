import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
];

function weightChart() {
  return (
    <BarChart width={800} height={200} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Bar dataKey="uv" fill="#8884d8" barSize={30} />
    </BarChart>
  );
}

export default weightChart;
