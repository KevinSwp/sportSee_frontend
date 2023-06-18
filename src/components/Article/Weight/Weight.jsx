import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  {name: '1', kg: 40, kCal: 400},
  {name: '2', kg: 30, kCal: 1398},
  {name: '3', kg: 20, kCal: 1800},
  {name: '4', kg: 20, kCal: 900},
  {name: '5', kg: 20, kCal: 800},
  {name: '6', kg: 26, kCal: 1600},
  {name: '7', kg: 50, kCal: 1000},
  {name: '8', kg: 28, kCal: 1500},
  {name: '9', kg: 20, kCal: 1300},
  {name: '10', kg: 80, kCal: 100},
];

function WeightChart() {
  return (
    <BarChart width={800} height={200} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      {/* <Tooltip /> */}
      <CartesianGrid stroke="#f5f5f5" />
      <Bar dataKey="kg" fill="#000000" barSize={5} />
      <Bar dataKey="kCal" fill="#E60000" barSize={5} />
    </BarChart>
  );
}

export default WeightChart;
