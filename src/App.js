import React, { Component } from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Counter from "./components/Counter";
import Header from "./components/Header";

class App extends Component {
  state = {
    visible: true,
    whichComponentToShow: "ImageSlider"
  };

  render() {
    if (this.state.whichComponentToShow === "ImageSlider") {
      return (
        <div className="App">
          <ImageSlider />
          <button
            onClick={() => {
              this.setState({ whichComponentToShow: "Counter" });
            }}
          >
            show counter
          </button>
        </div>
      );
    } else if (this.state.whichComponentToShow === "Counter") {
      return (
        <div className="App">
          <Counter />
          <button
            onClick={() => {
              this.setState({ whichComponentToShow: "Header" });
            }}
          >
            show header
          </button>
        </div>
      );
    } else if (this.state.whichComponentToShow === "Header") {
      return (
        <div className="App">
          <Header />
        </div>
      );
    }

    return null;
  }
}

export default App;
