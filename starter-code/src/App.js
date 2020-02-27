import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodButton from "./components/AddFoodButton";
import Search from "./components/Search";

class App extends Component {
  state = {
    showForm: false,
    foodsObj: foods,
    filteredFoods: foods,
    todayFoods: []
  };

  addTodayFood = (name, calories, qty) => {
    const copyTodayFood = [...this.state.todayFoods];
    const newTodayFood = {};
    console.log("pizza" in copyTodayFood.keys);
    if (name in copyTodayFood.keys) {
      copyTodayFood[name].qty += qty;
      copyTodayFood[name].calories = calories * copyTodayFood[name].qty;
    } else {
      newTodayFood[name] = {
        qty: qty,
        calories: calories
      };
      copyTodayFood.push(newTodayFood);
    }
    this.setState({ todayFoods: copyTodayFood });
  };

  toggleShowForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  addNewFood = foodObj => {
    const copyFoodObj = [...this.state.foodsObj];
    foodObj.quantity = 0;
    foodObj.image = "";
    copyFoodObj.push(foodObj);
    this.setState({ foodsObj: copyFoodObj });
  };

  filterFoods = subStr => {
    const filteredArr = this.state.foodsObj.filter(oneFoodObj =>
      oneFoodObj.name.toLowerCase().includes(subStr)
    );
    this.setState({ filteredFoods: filteredArr });
  };

  render() {
    return (
      <div className="App">
        <Search searchSubStr={this.filterFoods} />
        <button onClick={this.toggleShowForm}>Add new Food</button>
        {this.state.showForm ? (
          <AddFoodButton
            addNewFood={this.addNewFood}
            toggleForm={this.toggleShowForm}
          />
        ) : null}
        {this.state.filteredFoods.map(foodObj => (
          <FoodBox {...foodObj} handleAdd={this.addTodayFood} />
        ))}

        {this.state.todayFoods.map(foodObj => {
          <h4>
            {foodObj.qty} {foodObj.name} {foodObj.calories}
          </h4>;
        })}
      </div>
    );
  }
}

export default App;
