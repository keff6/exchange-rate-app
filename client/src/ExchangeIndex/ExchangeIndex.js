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
    console.log(e)
  }

  startDateHandler = (event) => {
    console.log("start:", event.target.value)
  }

  endDateHandler = (event) => {
    console.log("end:",event.target.value)
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
