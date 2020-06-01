import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";

// Will hold menu button component, logo component, and navigation component 
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU Button</div>
        <Logo />
        <nav>
            List of links
        </nav>
    </header>
);

export default toolbar;