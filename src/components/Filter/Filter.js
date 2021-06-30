import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Form from "react-bootstrap/Form";

import { FilterWrapper } from "./FilterStyled";
import { changeFilter } from "../../redux/phonebook/phonebook-actions";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";

const Filter = ({ setFilter, value }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <FilterWrapper>
      <Form.Group controlId="formSearchQuery">
        <Form.Label>
          Filter:
          <Form.Control
            tupe="text"
            value={value}
            onChange={handleChange}
          ></Form.Control>
        </Form.Label>
      </Form.Group>
    </FilterWrapper>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  value: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: (value) => dispatch(changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
