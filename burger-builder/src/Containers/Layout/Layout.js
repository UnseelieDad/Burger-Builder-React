import React, { Component } from "react";
import Aux from "../../HOC/Auxilary";
import classes from "./Layout.module.css";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../Components/Navigation/SideDrawer/SideDrawer";

// High Level component to contain the layout of the app
class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    // If relying on previous state in set state use this function form
    this.setState(( prevState ) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  }
  
  render () {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  };
}

export default Layout;
