import React from "react";
// Import logo oso that webpack is aware of it when the app is published
import burgerLogo from "../../Assets/Images/burger-builder-logo.png";
import classes from "./Logo.module.css";

// Component to hold the logo for the burger builder
const logo = (props) => (
    // height can be set custom by passing in a height prop
    // but height is generally controlled by scoped classes in containing parent
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="My Burger"/>
    </div>
);

export default logo;