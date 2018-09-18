import React from "react";

export default class MyForm extends React.Component {
  state = {
    name: "ben",
    favoritePet: "",
    rememberMe: false,
    title: "Miss."
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleChangeFavoritePet = event => {
    this.setState({ favoritePet: event.target.value });
  };

  handleCheck = event => {
    this.setState({ rememberMe: event.target.checked });
  };

  handleSelect = event => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleChange} />
        <textarea
          value={this.state.favoritePet}
          onChange={this.handleChangeFavoritePet}
        />
        <input
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleCheck}
        />
        <div>
          <select value={this.state.title} onChange={this.handleSelect}>
            <option>Mr.</option>
            <option>Miss.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}
