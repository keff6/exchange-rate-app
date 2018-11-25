import React, { Component } from 'react';
import Chart from './components/Chart';
import ExchangeInfo from './components/ExchangeInfo';
import './chart-card.css';
import { Row } from 'reactstrap';

class ChartCard extends Component {
  render() {
    return (
      <div className="chart-card col-md-12">
        <Row>
          <Chart />
          <ExchangeInfo />
        </Row>        
      </div>
    );
  }
}

export default ChartCard;
