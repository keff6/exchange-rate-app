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
          <div className="dates-header">
            5/11/2018 - 25/11/2018
          </div>          
          <Chart data={this.props.data}/>
          <ExchangeInfo data={this.props.data}/>
        </Row>        
      </div>
    );
  }
}

export default ChartCard;
