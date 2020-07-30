import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./Containers/Layout/Layout";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./Containers/Checkout/Checkout";
import Orders from "./Containers/Orders/Orders";
import Auth from "./Containers/Auth/Auth";
import Logout from "./Containers/Auth/Logout/Logout";
import * as actions from "./store/actions/actionsIndex";

class App extends Component {
  componentDidMount() {
    this.props.onoTryAutoSignup();
  }

  render() {
    return (
      <div>
        <Layout>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={Logout} />
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onoTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
