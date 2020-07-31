import * as actionTypes from "../actions/actionTypes";
import updateObject from "../../shared/utility";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // add 1 to the spcified ingredient
    case actionTypes.ADD_INGREDIENT:
      // using [action.ingredientName] in the objecct allows us to use a dynamic object name
      const updatedIngredient = {
        [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
      };
      const updatedIngredients = updateObject(
        state.ingredients,
        updatedIngredient
      );
      const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true,
      };
      return updateObject(state, updatedState);
    case actionTypes.REMOVE_INGREDIENT:
      // remove 1 from the specified ingredient
      const updatedIng = {
        [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
      };
      const updatedIngs = updateObject(state.ingredients, updatedIng);
      const updateState = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true,
      };
      return updateObject(state, updateState);
    case actionTypes.SET_INGREDIENTS:
      return updateObject(state, {
        ingredients: action.ingredients,
        error: false,
        totalPrice: initialState.totalPrice,
        building: false,
      });
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return updateObject(state, { error: true });
    default:
      return state;
  }
};

export default reducer;
