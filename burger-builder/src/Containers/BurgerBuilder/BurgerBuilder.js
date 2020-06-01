import React, { Component } from "react";
import Aux from "../../HOC/Auxilary";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";

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
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  }

  // Determine if the burger has enough ingredients to be purchased
  // May not get updated state if just using the regular container state
  // So passing in updated state from the add/remove handlers
  updatePurchaseState = (ingredients) => {
    // For each key in the object propulate the array with
    // the value of that key
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => { // reduce the array to the sum of prices
        // Start sum at 0, return sum + el to be stored back into sum for the
        // next element in the array
        return sum + el;
      }, 0);

      this.setState({purchaseable: sum > 0});
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
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
    this.updatePurchaseState(updatedIngredients);
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
    this.updatePurchaseState(updatedIngredients);
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
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients}/>  
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
