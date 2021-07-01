import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { logIn } from "../../redux/auth/auth-operations";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        return null;
    }
  };

  const handleSabmit = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(logIn({ email, password }));

      resetForm();
    },
    [dispatch, email, password]
  );

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="MainContainer loginFormContainer">
      <Form onSubmit={handleSabmit}>
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
          Login
        </Button>
      </Form>
    </div>
  );
}
