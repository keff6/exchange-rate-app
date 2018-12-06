import React from 'react';

const ExchangeInfo = (props) => {
  function getMax() {
    const max =  props.data.map(val => +val.value);
    return Math.max.apply(null, max);
  }
  function getMin() {
    const max =  props.data.map(val => +val.value);
    return Math.min.apply(null, max);
  }
  function getAverage() {
    const max =  props.data.map(val => +val.value);
    return (max.reduce((a,b) => a + b)) / props.data.length;
  }
  return (
    <div className="info-container col-md-2">
      <p><strong>max</strong>{props.data.length > 0 ? getMax() : 0}</p>
      <p><strong>min</strong>{props.data.length > 0 ? getMin(): 0}</p>
      <p><strong>avg</strong>{props.data.length > 0 ? getAverage(): 0}</p>
    </div>
  );
}

export default ExchangeInfo;
