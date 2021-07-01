import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ContactListWrapper } from "./ContactListStyled";
import ContactListItem from "./ContactListItem/ContactListItem";

import {
  deleteContacts,
  fetchContacts,
} from "../../redux/phonebook/phonebook-operation";
import {
  getContactsByFilter,
  getLoading,
} from "../../redux/phonebook/phonebook-selectors";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsByFilter);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (e) => {
    dispatch(deleteContacts(e.target.name));
  };

  return (
    <ContactListWrapper>
      {loading && <p>Loading...</p>}
      <ul className="contactList">
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactListItem
              key={id}
              name={name}
              id={id}
              number={number}
              handleDelete={handleDelete}
            ></ContactListItem>
          );
        })}
      </ul>
    </ContactListWrapper>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
//   onDelete: PropTypes.func.isRequired,
//   fetchContacts: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   contacts: getContactsByFilter(state),
//   loading: getLoading(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchContacts: () => dispatch(fetchContacts()),
//   onDelete: (id) => dispatch(deleteContacts(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
