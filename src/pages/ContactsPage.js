import React from "react";

import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import Filter from "../components/Filter/Filter";

const ContactPage = () => {
  return (
    <div className="MainContainer">
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactPage;
