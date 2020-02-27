import React, { Component } from "react";

export default class Search extends Component {
  state = {
    value: ""
  };
  handleSearch = e => {
    this.state.value = e.target.value;
    this.props.searchSubStr(this.state.value.toLowerCase());
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name=""
          id=""
          value={this.state.value}
          onChange={this.handleSearch}
        />
      </div>
    );
  }
}
