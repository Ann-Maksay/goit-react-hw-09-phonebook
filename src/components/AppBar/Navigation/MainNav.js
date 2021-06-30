import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { connect } from "react-redux";

import { getIsAuthenticated } from "../../../redux/auth/auth-selectors";

import routes from "../../../routes";

const MainNav = ({ isAuth }) => {
  return (
    <Nav className="mr-auto">
      <div className="NavItemContainer">
        <Nav.Item>
          <NavLink
            exact
            to={routes.home}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </Nav.Item>
      </div>
      {isAuth && (
        <div className="NavItemContainer">
          <Nav.Item>
            <NavLink
              to={routes.contacts}
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Contacts
            </NavLink>
          </Nav.Item>
        </div>
      )}
    </Nav>
  );
};

const mapStateToProps = (state) => ({
  isAuth: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(MainNav);
