import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { logIn } from "../../redux/auth/auth-operations";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  handleSabmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="MainContainer loginFormContainer">
        <Form onSubmit={this.handleSabmit}>
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
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

const mapDipatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDipatchToProps)(LoginForm);
