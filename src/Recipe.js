import React from "react";

const Recipe = props => {
  const { recipe } = props.recipe;
  console.log(recipe);

  return (
    <div className="card col" style={{ width: "18rem" }}>
      <img className="card-img-top" src={recipe.image} alt="recipe" />
      <div className="card-body">
        <h5 className="card-title">{recipe.label}</h5>
        <p>{recipe.dietLabels.join(", ")}</p>
        <p>Calories: {recipe.calories}</p>
        <p>Feeds {recipe.yield}</p>
        <span>
          <h5>Ingredients</h5>
          <p>{recipe.ingredientLines.join(", ")}</p>
        </span>
      </div>
    </div>
  );
};

export default Recipe;
