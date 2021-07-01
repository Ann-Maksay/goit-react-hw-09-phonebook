import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

import { FormWrapper } from "./ContactFormStyled";
import { addContacts } from "../../redux/phonebook/phonebook-operation";

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChangeForm = useCallback((e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(addContacts({ id: uuidv4(), name, number }));

      resetForm();
    },
    [dispatch, name, number]
  );

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
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
            onChange={handleChangeForm}
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
            onChange={handleChangeForm}
          />
        </Form.Group>
        <Button type="submit">Add contact</Button>
      </Form>
    </FormWrapper>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   onAdd: (contact) => dispatch(addContacts(contact)),
// });

// export default connect(null, mapDispatchToProps)(ContactForm);
