import React from 'react';
import {formatIngredientList} from '../../helpers/formatIngredients.js'

const CocktailDrawer = (props) => {
  function handleClose(e) {
    e.preventDefault();
    props.closeDrawer();
  }

  return (
    <div className="flex-container drawer animated slideInRight center-text flex-wrap align-content-start">
        <a className="flex-item flex-basis-100" onClick={handleClose}>
          <i className="close-button fa fa-close float-right"></i>
        </a>
        <h2 className="flex-item flex-basis-100">
          {props.title}
        </h2>
        <ul className="flex-item flex-basis-100">
          {formatIngredientList(
            props.ingredients,
            props.selectedIngredients,
            props.cocktailingredients
          )}
        </ul>
        <p className="flex-item flex-basis-100">
          {props.method}
        </p>
    </div>
  );
}

export default CocktailDrawer;