import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodButton from "./components/AddFoodButton";
import Search from "./components/Search";
import TodayFood from "./components/TodayFood";

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
    let isExisted = false;

    copyTodayFood.forEach(oneFoodObj => {
      if (oneFoodObj.hasOwnProperty(name)) {
        oneFoodObj[name].qty = Number(oneFoodObj[name].qty) + Number(qty);
        oneFoodObj[name].calories = calories * oneFoodObj[name].qty;
        isExisted = !isExisted;
      }
    });
    if (!isExisted) {
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
          <TodayFood {...foodObj} />;
        })}
      </div>
    );
  }
}

export default App;
