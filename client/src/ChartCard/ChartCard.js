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
            {this.props.cardData.start} - {this.props.cardData.end}
          </div>          
          <Chart data={this.props.cardData.data}/>
          <ExchangeInfo data={this.props.cardData.data}/>
        </Row>        
      </div>
    );
  }
}

export default ChartCard;
