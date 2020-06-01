import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

// Component to contain a list of navigation items
const navigationItems = (props) => {
    // Desktop only class causes navigation items to disappear
    // on the toolbar in mobile 
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem active link="/">
                Burger Builder
            </NavigationItem>
            <NavigationItem link="/">
                Checkout
            </NavigationItem>
        </ul>
    );
};

export default navigationItems;