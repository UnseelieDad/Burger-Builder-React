import React from "react";
import PropTypes from "prop-types";
import classes from "./BurgerIngredient.module.css";

// Component for dymanically creating burger ingredients
const burgerIngredient = (props) => {
  // Initially render nothing
  let ingredient = null;

  switch (props.type) {
    // Based on passed in type switch statement will
    // create divs with the appropriate classes to render
    // an image of the ingredient
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={classes.Meat}></div>;
      break;
    case "cheese":
      ingredient = <div className={classes.Cheese}></div>;
      break;
    case "salad":
      ingredient = <div className={classes.Salad}></div>;
      break;
    case "bacon":
      ingredient = <div className={classes.Bacon}></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

// Type validation
// props.type must be a string and is required
burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default burgerIngredient;
