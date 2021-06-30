import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import routes from "../../../routes";

const AuthNav = () => {
  return (
    <Nav variant="pills" as="ul">
      <div className="NavItemContainer">
        <Nav.Item as="li">
          <NavLink
            exact
            to={routes.register}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Register
          </NavLink>
        </Nav.Item>
      </div>
      <div className="NavItemContainer">
        <Nav.Item as="li">
          <NavLink
            to={routes.login}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Login
          </NavLink>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default AuthNav;
