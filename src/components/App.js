import "./App.scss";

import React, { Suspense, lazy, Component } from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";

import AppBar from "./AppBar/AppBar";
import PublicRoute from "./Routes/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import routes from "../routes";
import { getCurrentUser } from "../redux/auth/auth-operations";

const HomePage = lazy(() =>
  import("../pages/HomePage" /* webpackChunkName: "home-page" */)
);
const ContactsPage = lazy(() =>
  import("../pages/ContactsPage" /* webpackChunkName: "contscts-page" */)
);
const RegisterPage = lazy(() =>
  import("../pages/RegisterPage" /* webpackChunkName: "register-page" */)
);
const LoginPage = lazy(() =>
  import("../pages/LoginPage" /* webpackChunkName: "login-page" */)
);

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div>
        <AppBar />
        <Suspense fallback={<h1>Loading..</h1>}>
          <Switch>
            <PublicRoute exact path={routes.home} component={HomePage} />
            <PrivateRoute
              path={routes.contacts}
              component={ContactsPage}
              redirectTo={routes.login}
            />
            <PublicRoute
              path={routes.register}
              restricted
              component={RegisterPage}
              redirectTo={routes.contacts}
            />
            <PublicRoute
              path={routes.login}
              restricted
              component={LoginPage}
              redirectTo={routes.contacts}
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDospatchToProps = {
  getUser: getCurrentUser,
};

export default connect(null, mapDospatchToProps)(App);
