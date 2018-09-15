import React from "react";

export default class Counter extends React.Component {
  state = {
    count: 0
  };

  componentWillUnmount() {
    console.log("unmounting...");
  }

  componentDidMount() {
    console.log("mounting...");
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}
