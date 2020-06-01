import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

// Component to contain a list of navigation items
const navigationItems = (props) => (
    <nav>
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>
                Burger Builder
            </NavigationItem>
            <NavigationItem link="/">
                Checkout
            </NavigationItem>
        </ul>
    </nav>
);

export default navigationItems;