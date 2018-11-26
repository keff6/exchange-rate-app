import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const Chart = (props) => {
  console.log(JSON.parse(props.data.data | []))
  return (
    <div className="chart-container col-md-10">
      <LineChart width={600} height={300} data={props.data.data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
      </LineChart>
    </div>
  );
}

export default Chart;
