import React from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";

import { getUserMail } from "../../../redux/auth/auth-selectors";
import { logOut } from "../../../redux/auth/auth-operations";

const UserMenu = ({ userMail, onLogout }) => {
  return (
    <>
      <div className="NavItemContainer">
        <p className="NavText">{`${userMail}`} </p>
      </div>
      <div className="NavItemContainer">
        <Button variant="primary" onClick={onLogout}>
          Logout
        </Button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  userMail: getUserMail(state),
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
