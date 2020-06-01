import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

// Will hold menu button component, logo component, and navigation component 
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU Button</div>
        <Logo />
        <NavigationItems />
    </header>
);

export default toolbar;