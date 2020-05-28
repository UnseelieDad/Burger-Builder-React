import React from "react";
import classes from "./BuildControl.module.css";
// Each control element has a label, an add, and remove button.
const buildControl = (props) => (
    <div classNae={classes.BuildControl}>
        <div className={classes.Label} >{props.label}</div>
        <button className={classes.Less} >Less</button>
        <button className={classes.More} >More</button>
    </div>
);

export default buildControl;