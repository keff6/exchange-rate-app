import React, { Component } from 'react';
import DateControl from './components/DateControl';
import ChartsContainer from './components/ChartsContainer';
import './exchange-index.css';

const initialState ={
  startDate: "",
  endDate: "",
  data: []
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
    const response = await fetch('/api/index', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
          startDate: this.state.startDate.split('-').reverse().join('/'),
          endDate: this.state.endDate.split('-').reverse().join('/')
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
          onClearControls={this.clearControls}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
        <ChartsContainer data={this.state.data}/>
      </div>
    )
  }
}

export default ExchangeIndex;
