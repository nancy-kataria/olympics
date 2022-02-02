import React from 'react';
import tableData from './dummyData.json';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const OlympicData = tableData.map((data)=>(
    {
      year: data.Year,
      medals: data.Medals
    }
))

function Chart() {
  return <div className='content'>
    <LineChart
      width={500}
      height={300}
      data={OlympicData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="medals" stroke="#8884d8" />
    </LineChart>
  </div>;
}

export default Chart;