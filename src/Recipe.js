import React from "react";

const Recipe = props => {
  const { recipe } = props.recipe;

  return (
    <div
      className="card mx-auto"
      style={{ width: "25vw", height: "40vh", overflow: "scroll" }}
    >
      <h5 className="card-title">{recipe.label}</h5>
      <img className="card-img-top" src={recipe.image} alt="recipe" />
      <div className="card-body">
        <p className="card-text">{recipe.dietLabels.join(", ")}</p>
        <p>Calories: {recipe.calories}</p>
        <p>Feeds {recipe.yield}</p>
        <h5>Ingredients</h5>
        <p>{recipe.ingredientLines.join(", ")}</p>
      </div>
    </div>
  );
};

export default Recipe;
