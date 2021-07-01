import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";

import { getUserMail } from "../../../redux/auth/auth-selectors";
import { logOut } from "../../../redux/auth/auth-operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userMail = useSelector(getUserMail);

  const onLogout = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

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
}

// const mapStateToProps = (state) => ({
//   userMail: getUserMail(state),
// });

// const mapDispatchToProps = {
//   onLogout: logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
