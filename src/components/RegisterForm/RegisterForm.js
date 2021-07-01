import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { register } from "../../redux/auth/auth-operations";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleInputChange = useCallback((e) => {
    const { value, name } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  }, []);

  const handleSabmit = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(register({ name, email, password }));

      resetForm();
    },
    [dispatch, email, password, name]
  );

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="MainContainer loginFormContainer">
      <Form onSubmit={handleSabmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={name}
            name="name"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            name="email"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            onChange={handleInputChange}
            autoComplete="off"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

// const makeDispathcToProps = {
//   onRegister: register,
// };

// export default connect(null, makeDispathcToProps)(RegisterForm);
