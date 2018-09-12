import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Body = props => (
  <div>
    <p className="App-intro">{props.text}</p>
    <p className="App-intro">{props.text2}</p>
    <p className="App-intro">{props.myFunc(1, 2)}</p>
  </div>
);
// const Body = () => {
//   return (
//     <p className="App-intro">
//       To get started, edit <code>src/App.js</code> and save to reload.
//     </p>
//   );
// };

// function Body() {
//   return (
//     <p className="App-intro">
//       To get started, edit <code>src/App.js</code> and save to reload.
//     </p>
//   );
// }

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.title}</h1>
        <div>{this.props.myFunc(10, 12)}</div>
      </header>
    );
  }
}

class App extends Component {
  add(a, b) {
    return a + b;
  }

  render() {
    return (
      <div className="App">
        <Header
          title={"Hello"}
          num={7}
          myArr={[10, 2, 3]}
          myFunc={this.add}
          myObj={{
            a: 5,
            b: 6
          }}
        />
        <Body myFunc={this.add} text="i am cool" text2="i am cool2" />
        <Body myFunc={this.add} text="i am" text2="i cool2" />
      </div>
    );
  }
}

export default App;
