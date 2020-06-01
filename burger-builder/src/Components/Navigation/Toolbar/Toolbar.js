import React from "react";
import classes from "./Toolbar.module.css";

// Will hold menu button component, logo component, and navigation component 
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU Button</div>
        <div>LOGO</div>
        <nav>
            List of links
        </nav>
    </header>
);

export default toolbar;