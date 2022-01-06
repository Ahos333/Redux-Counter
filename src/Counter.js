import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: 'INCREMENT'
    });
  };

  incrementFive = () => {
    this.props.dispatch({
      type: 'INCREMENTFIVE'
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: 'DECREMENT'
    });
  };

  decrementTen = () => {
    this.props.dispatch({
      type: 'DECREMENTTEN'
    });
  };

  reset = () => {
    this.props.dispatch({
      type: 'RESET'
    });
  };

  render() {
    return (
      <div className="counter-container">
        <h2 className='counter-title'>Counter</h2>
        <p className='counter'>{this.props.count}</p>
        <div className='counter-numbers'>
          <button className='counter-btn btn' onClick={this.increment}>+ 1</button>
          <button className='counter-btn btn' onClick={this.incrementFive}>+ 5</button>
          <button className='counter-btn btn' onClick={this.decrement}>- 1</button>
          <button className='counter-btn btn' onClick={this.decrementTen}>- 10</button>
          <button className='counter-btn btn' onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Counter);