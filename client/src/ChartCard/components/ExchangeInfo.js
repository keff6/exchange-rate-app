import React from 'react';
import PropTypes from 'prop-types';

const ExchangeInfo = (props) => {
  function getMax() {
    const max =  props.data.map(val => +val.value);
    return Math.max.apply(null, max).toFixed(2);
  }
  function getMin() {
    const max =  props.data.map(val => +val.value);
    return Math.min.apply(null, max).toFixed(2);
  }
  function getAverage() {
    const max =  props.data.map(val => +val.value);
    return ((max.reduce((a,b) => a + b)) / props.data.length).toFixed(2);
  }
  return (
    <div className="info-container col-md-2">
      <p><label>max</label>{props.data.length > 0 ? getMax() : 0}</p>
      <p><label>min</label>{props.data.length > 0 ? getMin(): 0}</p>
      <p><label>avg</label>{props.data.length > 0 ? getAverage(): 0}</p>
    </div>
  );
}

ExchangeInfo.propTypes = {
  data: PropTypes.object
}

export default ExchangeInfo;
