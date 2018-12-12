import React, { Component } from 'react';
import DateControl from './components/DateControl';
import ChartsContainer from './components/ChartsContainer';
import ExchangeService from '../services/exchange.service'
import './exchange-index.css';

const initialState ={
  startDate: "",
  endDate: "",
  cards: []
}

class ExchangeIndex extends Component {
  state = initialState

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.startDate);
    this.getDolarIndex();
  }

  startDateHandler = (event) => {
    // console.log("start:", event.target.value)
    // const parsedStart = event.target.value.split('-').reverse().join('/');
    this.setState({startDate: event.target.value});
  }

  endDateHandler = (event) => {
    // console.log("end:",event.target.value)
    // const parsedEnd = event.target.value.split('-').reverse().join('/');

    this.setState({endDate: event.target.value});
  }

  clearControls = () => {
    this.setState(initialState);
  }

  getDolarIndex = async () => {
    const { cards } = this.state;
    const exchangeService = new ExchangeService();
    const startFE = this.state.startDate.split('-').reverse().join('/');
    const endFE = this.state.endDate.split('-').reverse().join('/');
    let { data, start, end } = await exchangeService.getDolarIndex(startFE, endFE);
    console.log(data)
    cards.push({
      data,
      start,
      end
    })
    this.setState({cards});
  }

  render() {
    return (
      <div className="dashboard">
        <DateControl 
          onSubmit={this.submitHandler}
          onChangeStartDate={this.startDateHandler}
          onChangeEndDate={this.endDateHandler}
          onClearControls={this.clearControls}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
        <ChartsContainer
          cards={this.state.cards}
        />
      </div>
    )
  }
}

export default ExchangeIndex;
