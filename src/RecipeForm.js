import React, { Component } from "react";
import Recipes from "./Recipes";
export default class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient: "",
      isSubmitted: false
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
      ingredient: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.ingredient}
          ></input>
          <input type="submit" />
        </form>
        {!!this.state.isSubmitted && (
          <Recipes ingredient={this.state.ingredient} />
        )}
      </div>
    );
  }
}
