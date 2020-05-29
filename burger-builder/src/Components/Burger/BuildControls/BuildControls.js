import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

// Determine the label for each control and
// what type of ingredient it corresponds to.
const controls = [
    {label: "Salad", type: "salad"},
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "cheese"},
    {label: "Meet", type: "meat"}
];

// Section of the page containing the controls for adding
// ingredients to the burger manually.
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => {
            // disabled access the disabled infor for that specific type
            return <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        })}
    </div>
);

export default buildControls;