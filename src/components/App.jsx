import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';


export default function App() {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? []
  // );

  // const contacts = useSelector(state => state.contacts.contacts);

  // const filter = useSelector(state => state.contacts.filter);

  // const filterContacts = () => {
  //   const normalizedName = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedName)
  //   );
  // };

  return (
    <div>
      <Container>
        <h1
          style={{
            fontFamily: 'Montserrat',
            fontSize: '32px',
          }}
        >
          Phonebook
        </h1>
        <ContactForm />
        <div>
          <h2 style={{ fontFamily: 'Montserrat', fontSize: '32px' }}>
            Contacts
          </h2>
          <Filter />
          <ContactList />
        </div>
      </Container>
    </div>
  );
}
