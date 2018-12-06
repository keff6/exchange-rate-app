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
          <Chart data={this.props.data}/>
          <ExchangeInfo data={this.props.data}/>
        </Row>        
      </div>
    );
  }
}

export default ChartCard;
