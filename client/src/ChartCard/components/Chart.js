import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = (props) => {
  return (
    <div className="chart-container col-md-10">
      <ResponsiveContainer height='100%' width='100%'>
        <AreaChart data={props.data}
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="date" interval='preserveStartEnd' hide="true"/>
          <YAxis type="number" domain={[450, 650]}/>
          <Tooltip/>
          <Area type='monotone' dataKey='value' stroke='rgba(0, 117, 58, 0.635)' fill='rgba(0, 117, 58, 0.635)' />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
