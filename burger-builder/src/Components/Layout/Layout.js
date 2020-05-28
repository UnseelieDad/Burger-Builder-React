import React from "react";
import Aux from "../../HOC/Auxilary";
import classes from "./Layout.module.css";

// High Level component to contain the layout of the app
const layout = (props) => {
  return (
    <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
