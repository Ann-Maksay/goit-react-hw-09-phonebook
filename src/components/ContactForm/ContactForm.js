import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

import { FormWrapper } from "./ContactFormStyled";
import { addContacts } from "../../redux/phonebook/phonebook-operation";

const INITIAL_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChangeForm = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onAdd } = this.props;

    onAdd({ id: uuidv4(), name, number });

    this.resetForm();
  };

  resetForm = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormWrapper>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label className="lableTitle">Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              placeholder="Name"
              required
              value={name}
              onChange={this.handleChangeForm}
            />
          </Form.Group>
          <Form.Group controlId="formNumber">
            <Form.Label className="lableTitle">Number</Form.Label>
            <Form.Control
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              placeholder="Phone"
              required
              value={number}
              onChange={this.handleChangeForm}
            />
          </Form.Group>
          <Button type="submit">Add contact</Button>
        </Form>
      </FormWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onAdd: (contact) => dispatch(addContacts(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
