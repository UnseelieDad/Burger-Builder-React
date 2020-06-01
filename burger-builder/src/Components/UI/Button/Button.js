import React from "react";
import classes from "./Button.module.css";

// Reusable button with different custom styling
// Button takes base button styling, then either Success or Danger
// styling based on how btnType is defined by the parent.
const button = (props) => (
    <button 
        onClick={props.clicked}
        className={[classes.Button, classes[props.btnType]].join(" ")}
    >
        {props.children}
    </button>
);

export default button;