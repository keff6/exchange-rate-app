import React, { Component } from 'react';
import ChartCard from '../../ChartCard/ChartCard';
import { Row } from 'reactstrap';

class ChartsContainer extends Component {
  render() {
    console.log(this.props.cards);
    return (
      <div className="charts-container"> 
        {
          this.props.cards && this.props.cards.length > 0 ?
          this.props.cards.map( (card, index) => (
            <Row key={index}>
              <ChartCard 
                cardData={card}
              />
            </Row>
          ))
          : null
        }
      </div>
    );
  }
}

export default ChartsContainer;
