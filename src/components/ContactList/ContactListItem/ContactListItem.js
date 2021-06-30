import React from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";

const ContactListItem = ({ name, number, id, handleDelete }) => {
  return (
    <li className="contactListItem">
      <p className="contactListText">
        {name}: {number}
      </p>
      <Button
        type="button"
        name={id}
        onClick={handleDelete}
        className="contactListDeleteButton"
      >
        Delete
      </Button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
