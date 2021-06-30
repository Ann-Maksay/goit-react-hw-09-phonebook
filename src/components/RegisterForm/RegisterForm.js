import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { register } from "../../redux/auth/auth-operations";

class RegisterForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleInputChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  handleSabmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className="MainContainer loginFormContainer">
        <Form onSubmit={this.handleSabmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={name}
              name="name"
              onChange={this.handleInputChange}
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
              onChange={this.handleInputChange}
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
              onChange={this.handleInputChange}
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
}

const makeDispathcToProps = {
  onRegister: register,
};

export default connect(null, makeDispathcToProps)(RegisterForm);
