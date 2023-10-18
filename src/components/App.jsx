import { useEffect, useState } from 'react';
import { Phonebook } from './Phonebook';
import { Contacts } from './Contacts';
import css from './App.module.css';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localeContacts = localStorage.getItem('contacts');
    if (localeContacts !== null) setContacts(JSON.parse(localeContacts));
  }, []);

  const addToContacts = contact => {
    setContacts([...contacts, contact]);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  const nameFilter = fitlerValue => {
    if (!fitlerValue) {
      return setFilter('');
    }
    setFilter(fitlerValue);
  };

  const contactsArrNameFilter = () => {
    return contacts.filter(({ name }) => {
      if (!filter) {
        return contacts;
      }
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const isNameAlreadyinContacts = keyName => {
    return contacts.find(({ name }) => {
      return keyName === name;
    });
  };

  const deleteContact = userId => {
    const rightContacts = contacts.filter(({ id }) => {
      return id !== userId;
    });

    localStorage.setItem('contacts', JSON.stringify(rightContacts));
    setContacts(rightContacts);
  };

  return (
    <div className={css.mainDiv}>
      <Phonebook
        isNameAlreadyinContacts={isNameAlreadyinContacts}
        onClickAddContact={addToContacts}
      />
      <Contacts
        onDeleteContact={deleteContact}
        onNameFilter={nameFilter}
        contacts={contactsArrNameFilter()}
      />
    </div>
  );
}

// export class App extends Component {
// state = {
//   contacts: [],
//   filter: '',
// };

// componentDidMount() {
//   const localeContacts = localStorage.getItem('contacts');
//   if (localeContacts !== null) {
//     this.setState({
//       contacts: JSON.parse(localeContacts),
//     });
//   }
// }

// addToContacts = contact => {
//   this.state.contacts.push(contact);
//   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   console.log();
//   this.setState({
//     contacts: this.state.contacts,
//   });
// };

// nameFilter = fitlerValue => {
//   if (!fitlerValue) {
//     return this.setState({
//       filter: '',
//     });
//   }
//   this.setState({
//     filter: fitlerValue,
//   });
// };

// contactsArrNameFilter = () => {
//   return this.state.contacts.filter(({ name }) => {
//     if (!this.state.filter) {
//       return this.state.contacts;
//     }
//     return name.toLowerCase().includes(this.state.filter.toLowerCase());
//   });
// };

// isNameAlreadyinContacts = keyName => {
//   return this.state.contacts.find(({ name }) => {
//     return keyName === name;
//   });
// };

// deleteContact = userId => {
//   console.log(userId);
//   const rightContacts = this.state.contacts.filter(({ id }) => {
//     return id !== userId;
//   });
//   console.log(rightContacts);
//   localStorage.setItem('contacts', JSON.stringify(rightContacts));

//   this.setState({
//     contacts: rightContacts,
//   });
// };

// render() {
//   return (
//     <div className={css.mainDiv}>
//       <Phonebook
//         isNameAlreadyinContacts={this.isNameAlreadyinContacts}
//         onClickAddContact={this.addToContacts}
//       />
//       <Contacts
//         onDeleteContact={this.deleteContact}
//         onNameFilter={this.nameFilter}
//         contacts={this.contactsArrNameFilter()}
//       />
//     </div>
//   );
// }
// }
