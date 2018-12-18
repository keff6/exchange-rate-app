import React from 'react';
import PropTypes from 'prop-types';
import ChartCard from '../../ChartCard/ChartCard';
import { Row } from 'reactstrap';

const ChartsContainer = (props) => (
  <div className="charts-container"> 
    {
      props.cards && props.cards.length > 0 ?
      props.cards.map( (card, index) => (
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

ChartsContainer.propTypes = {
  cards: PropTypes.array
}

export default ChartsContainer;
