import React, { Component } from 'react';
import Chart from './components/Chart';
import ExchangeInfo from './components/ExchangeInfo';

class ChartCard extends Component {
  render() {
    return (
      <div>
        ChartCard
        <Chart />
        <ExchangeInfo />
      </div>
    );
  }
}

export default ChartCard;
