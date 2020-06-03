import React from "react";
import classes from "./Spinner.module.css";

// A loading spinner to display while waiting for requests
// CSS code from single page spinner project
const spinner = () => (
    <div className={classes.Loader}>Loading...</div>
);

export default spinner;