import React from "react";
import classes from "./Burger.module.css"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    // Props.ingredients initially comes in as an object.
    // Use Object.keys to create an array of property names, but not the values
    const transformedIngredients = Object.keys(props.ingredients)
        // For each key in ingredients
        .map(igKey => {
            // Create an array equal to the size of the key's value
            // Then for each element in that array, create a burger ingredient
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            });
        });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;