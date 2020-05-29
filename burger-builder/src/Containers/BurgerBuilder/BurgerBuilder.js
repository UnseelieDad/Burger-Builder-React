import React, { Component } from "react";
import Aux from "../../HOC/Auxilary";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    // previous amount of this ingredient
    const oldCount = this.state.ingredients[type];
    // new amount
    const updatedCount = oldCount + 1;
    // updated ingredients object
    const updatedIngredients = {
      ...this.state.ingredients
    };
    // update the count in the new object
    updatedIngredients[type] = updatedCount;
    // Add to the price based on the kind ofo ingredient added
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  }

  // Same as add but in reverse
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    let updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceSubtraction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceSubtraction;

    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    // for each key in the copied ingredients state
    for (let key in disabledInfo) {
      // set the value of the key to true if it's <= 0
      // or false otherwise
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
