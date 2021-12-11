import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>increment</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}

export default Counter;
