import React from "react";
// Import logo oso that webpack is aware of it when the app is published
import burgerLogo from "../../Assets/Images/burger-builder-logo.png";
import classes from "./Logo.module.css";

// Component to hold the logo for the burger builder
const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="My Burger"/>
    </div>
);

export default logo;