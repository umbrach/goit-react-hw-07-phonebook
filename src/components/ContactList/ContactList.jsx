import s from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteUserAction } from 'redux/slice';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const dispatch = useDispatch();

    const contacts = useSelector(state => state.contacts.contacts);

    const filter = useSelector(state => state.contacts.filter);

    const filterContacts = () => {
      const normalizedName = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedName)
      );
  };
  
  const visibleContacts = filterContacts();

  const handleDeleteContact = e => {
    dispatch(deleteUserAction(e.target.id));
  };

  return (
    <ul className={s.list}>
      {visibleContacts.map(item => (
        <li className={s.item} key={item.id}>
          {item.name}:<span className={s.phoneNumber}>{item.number}</span>
          <button
            className={s.button}
            id={item.id}
            onClick={handleDeleteContact}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
