import React, { Component } from "react";
import "./App.css";
import MyForm from "./components/MyForm";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <MyForm />
      </div>
    );
  }
}

export default App;
