import React, { Component } from "react";
import Recipe from "./Recipe";
export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }
  render() {
    return (
      <div className="row ">
        {this.state.recipes.map(recipe => {
          return <Recipe key={recipe.recipe.label} recipe={recipe} />;
        })}
      </div>
    );
  }

  componentDidMount() {
    fetch(
      `https://api.edamam.com/search?q=${this.props.ingredient}&app_id=a4332796&app_key=07da53188fd4a9d44e42a56f6a560a27&from=0&to=3`
    )
      .then(resp => resp.json())
      .then(recipes => this.setState({ recipes: recipes.hits }));
  }
}
