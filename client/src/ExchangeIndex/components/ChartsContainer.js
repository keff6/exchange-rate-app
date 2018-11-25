import React, { Component } from 'react';
import ChartCard from '../../ChartCard/ChartCard';
import { Row } from 'reactstrap';

class ChartsContainer extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div className="charts-container"> 
        <Row>
          <ChartCard />
        </Row>   

        <Row>
          <ChartCard />
        </Row>      
      </div>
    );
  }
}

export default ChartsContainer;
