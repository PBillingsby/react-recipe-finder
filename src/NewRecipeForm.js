import React, { Component } from "react";
export default class NewRecipeForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="new-recipe-form">
        <h4 className="text-center">Add New Recipe</h4>
        <form>
          <div className="form-group">
            <label></label>
            <input type="text"></input>
          </div>
        </form>
      </div>
    );
  }
}
