import React from "react";
import classes from "./Burger.module.css"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    // Props.ingredients initially comes in as an object.
    // Use Object.keys to create an array of property names, but not the values
    let transformedIngredients = Object.keys(props.ingredients)
        // For each key in ingredients
        .map(igKey => {
            // Create an array equal to the size of the key's value
            // Then for each element in that array, create a burger ingredient
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            });
        })
        // Reduce to a single array so we know when no ingredients are selected
        .reduce((arr, el) => {
            // Arr is the reduced value, initialized as an empty array
            // concat combines two arrays. 
            // The return value is stored in arr across each iteration
            return arr.concat(el);
        }, []);
    //console.log(transformedIngredients);
    // If no options have been selected, output a message instead.
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients.</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;