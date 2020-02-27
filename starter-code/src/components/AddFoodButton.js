import React, { Component } from "react";

export default class AddFoodButton extends Component {
  state = {
    name: "",
    calories: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewFood(this.state);
    this.props.toggleForm();
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        {
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="calories"
              value={this.state.calories}
              onChange={this.handleChange}
            />
            <button type="submit"> Submit </button>
          </form>
        }
      </div>
    );
  }
}
