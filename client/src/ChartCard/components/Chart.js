import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Chart = (props) => {
  return (
    <div className="chart-container col-md-10">
      <LineChart width={600} height={300} data={props.data}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip/>
        <Legend />
      </LineChart>
    </div>
  );
}

export default Chart;
