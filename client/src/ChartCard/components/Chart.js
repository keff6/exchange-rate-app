import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = (props) => {
  return (
    <div className="chart-container col-md-10">
      <ResponsiveContainer height='100%' width='100%'>
        <LineChart data={props.data}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis type="number" domain={[400, 700]} />
          <Tooltip/>
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
