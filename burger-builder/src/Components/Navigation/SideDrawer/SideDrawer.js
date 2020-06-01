import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";

// Side drawer that slides out when the menu button is clicked
// for mobile only
const sideDrawer = (props) => {

    return (
        <div className={classes.SideDrawer}>
            <Logo />
            <NavigationItems />
        </div>
    );
};

export default sideDrawer;