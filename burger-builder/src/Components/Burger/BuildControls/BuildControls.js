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
        {controls.map(crtl => {
            return <BuildControl key={crtl.label} label={crtl.label}/>
        })}
    </div>
);

export default buildControls;