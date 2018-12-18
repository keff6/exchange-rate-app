import React from 'react';
import PropTypes from 'prop-types';
import Chart from './components/Chart';
import ExchangeInfo from './components/ExchangeInfo';
import './chart-card.css';
import { Row } from 'reactstrap';

const ChartCard = (props) => (
  <div className="chart-card col-md-12">
    <Row>
      <div className="dates-header">
        {props.cardData.start} - {props.cardData.end}
      </div>          
      <Chart data={props.cardData.data}/>
      <ExchangeInfo data={props.cardData.data}/>
    </Row>        
  </div>
);

ChartCard.propTypes = {
  cardData: PropTypes.object
}

export default ChartCard;
