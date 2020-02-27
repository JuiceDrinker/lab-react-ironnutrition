import React, { Component } from "react";

export default class FoodBox extends Component {
  state = {
    qty: 1
  };
  
  addTodayFood = () => {
    const { name, calories } = this.props;
    const qty = this.state.qty;
    this.props.handleAdd(name, calories, qty);
  };

  handleQtyChange = e => {
    const { value } = e.target;
    this.setState({ qty: value });
  };

  render() {
    return (
      <div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.image} alt="" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.name}</strong> <br />
                  <small>{this.props.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    value={this.state.qty}
                    onChange={this.handleQtyChange}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={this.addTodayFood}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
