import "./App.scss";

import React, { Suspense, lazy, useEffect } from "react";
import { Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

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

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <Suspense fallback={<h1>Loading..</h1>}>
        <Switch>
          <PublicRoute exact path={routes.home}>
            <HomePage />
          </PublicRoute>

          <PrivateRoute path={routes.contacts} redirectTo={routes.login}>
            <ContactsPage />
          </PrivateRoute>

          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.contacts}
          >
            <RegisterPage />
          </PublicRoute>

          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.contacts}
          >
            <LoginPage />
          </PublicRoute>
        </Switch>
      </Suspense>
    </div>
  );
}

// const mapDospatchToProps = {
//   getUser: getCurrentUser,
// };

// export default connect(null, mapDospatchToProps)(App);
