import React from "react";

export default class Counter extends React.Component {
  render() {
    bacon;
    return (
      <div>
        <div>count: {this.props.count}</div>
        <button onClick={this.props.increment}>increment</button>
        <button onClick={this.props.decrement}>decrement</button>
      </div>
    );
  }
}
