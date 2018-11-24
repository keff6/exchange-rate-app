import React, { Component } from 'react';
import DateControl from './components/DateControl';
import ChartsContainer from './components/ChartsContainer';
import './exchange-index.css';

class ExchangeIndex extends Component {
  state = {
    startDate: "",
    endDate: ""
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.startDate);
    this.getDolarIndex();
  }

  startDateHandler = (event) => {
    // console.log("start:", event.target.value)
    const parsedStart = event.target.value.split('-').reverse().join('/');
    this.setState({startDate: parsedStart});
  }

  endDateHandler = (event) => {
    // console.log("end:",event.target.value)
    const parsedEnd = event.target.value.split('-').reverse().join('/');

    this.setState({endDate: parsedEnd});
  }

  getDolarIndex = async () => {
    const response = await fetch('/api/ind2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
          startDate: this.state.startDate,
          endDate: this.state.endDate
        }),
    });
    const body = await response.text();
    console.log(body);
  }

  render() {
    return (
      <div className="dashboard">
        <DateControl 
          onSubmit={this.submitHandler}
          onChangeStartDate={this.startDateHandler}
          onChangeEndDate={this.endDateHandler}
        />
        <ChartsContainer />
      </div>
    )
  }
}

export default ExchangeIndex;
