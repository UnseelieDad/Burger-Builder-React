import React from "react";
import Aux from "../../../HOC/Auxilary";
import Button from "../../UI/Button/Button";

// Component for the order summary
const orderSummary = (props) => {
    // Ingredientes will come in as an object
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform:"capitalize"}}>
                        {igKey}
                    </span>
                    : {props.ingredients[igKey]}
                </li>
            );
        });
    
    // Using Aux since the summary is wrapped by a Modal
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;