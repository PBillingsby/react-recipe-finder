import React, { Component } from "react";
import Recipes from "./Recipes";
export default class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient: "",
      isSubmitted: false,
      count: 10
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      isSubmitted: true
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="pb-3">
        <h1 className="text-center">Search Recipes</h1>
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="form-group">
            <label>Ingredient: </label>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.ingredient}
              name="ingredient"
            ></input>
          </div>
          <div className="form-group">
            <label>Number of recipes to display</label>
            <select
              onChange={event => this.handleChange(event)}
              name="count"
              value={this.state.count}
            >
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>
          </div>

          <input type="submit" />
        </form>
        {!!this.state.isSubmitted && (
          <Recipes
            ingredient={this.state.ingredient}
            count={this.state.count}
          />
        )}
      </div>
    );
  }
}
