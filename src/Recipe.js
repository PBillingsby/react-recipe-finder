import React from "react";

const Recipe = props => {
  const { recipe } = props.recipe;
  return (
    <div className="card col" style={{ width: "18rem" }}>
      <h1>{recipe.label}</h1>
    </div>
  );
};

export default Recipe;
