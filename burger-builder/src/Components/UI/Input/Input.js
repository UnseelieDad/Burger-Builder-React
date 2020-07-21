import React from "react";

import classes from "./Input.module.css";

const input = (props) => {
  let inputElement = null;

  // determine what kind of input to use based off
  // of the passed in props
  // can assign the usual props for that input type as normal
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select className={classes.InputElement} value={props.value}>
          {
            // Create select options dynamically from options in contact data
            props.elementConfig.options.map((option) => (
              <option key={option.value} value={option.value}>{option.displayValue}</option>
            ))
          }
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
