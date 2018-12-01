import React, { Component } from 'react';
import DateControl from './components/DateControl';
import ChartsContainer from './components/ChartsContainer';
import './exchange-index.css';

class ExchangeIndex extends Component {
  state = {
    startDate: "",
    endDate: "",
    data: []
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
    const response = await fetch('/api/index', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
          startDate: this.state.startDate,
          endDate: this.state.endDate
        }),
    });
    let { data } = await response.json(); 
    
    data = data.map(val => {
      val.date = new Date(val.date).toLocaleString().split(' ')[0];
      val.value = Number(val.value).toFixed(2)
      return val
    })
    this.setState({data});
  }

  render() {
    return (
      <div className="dashboard">
        <DateControl 
          onSubmit={this.submitHandler}
          onChangeStartDate={this.startDateHandler}
          onChangeEndDate={this.endDateHandler}
        />
        <ChartsContainer data={this.state.data}/>
      </div>
    )
  }
}

export default ExchangeIndex;
