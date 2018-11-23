import React, { Component } from 'react';
import DateControl from './components/DateControl';
import ChartsContainer from './components/ChartsContainer';
import './exchange-index.css';

class ExchangeIndex extends Component {
  render() {
    return (
      <div className="dashboard">
        <DateControl />
        <ChartsContainer />
      </div>
    )
  }
}

export default ExchangeIndex;
