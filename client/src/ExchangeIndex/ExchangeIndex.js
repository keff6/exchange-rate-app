import React, { Component } from 'react';
import DateControl from './components/DateControl';
import ChartsContainer from './components/ChartsContainer';

class ExchangeIndex extends Component {
  render() {
    return (
      <div>
        Exchange Index dashboard
        <DateControl />
        <ChartsContainer />
      </div>
    )
  }
}

export default ExchangeIndex;
