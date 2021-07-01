import React from "react";
import { useSelector } from "react-redux";

import Navbar from "react-bootstrap/Navbar";

import { getIsAuthenticated } from "../../redux/auth/auth-selectors";

import MainNav from "./Navigation/MainNav";
import AuthNav from "./Navigation/AuthNav";
import UserMenu from "./Navigation/UserMenu";

export default function AppBar() {
  const isAuth = useSelector(getIsAuthenticated);
  return (
    <header>
      <Navbar bg="light" variant="light">
        <MainNav />
        {isAuth ? <UserMenu /> : <AuthNav />}
      </Navbar>
    </header>
  );
}

// const mapStateToProps = (state) => ({
//   isAuth: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(AppBar);
