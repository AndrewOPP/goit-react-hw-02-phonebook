import { Component } from 'react';
import { Phonebook } from './Phonebook';
import { Contacts } from './Contacts';
import css from './App.module.css';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addToContacts = contact => {
    this.state.contacts.push(contact);
    this.setState({
      contacts: this.state.contacts,
    });
  };

  nameFilter = fitlerValue => {
    if (!fitlerValue) {
      return this.setState({
        filter: '',
      });
    }
    this.setState({
      filter: fitlerValue,
    });
  };

  contactsArrNameFilter = () => {
    return this.state.contacts.filter(({ name }) => {
      if (!this.state.filter) {
        return this.state.contacts;
      }
      return name.toLowerCase().includes(this.state.filter.toLowerCase());
    });
  };

  isNameAlreadyinContacts = keyName => {
    return this.state.contacts.find(({ name }) => {
      return keyName === name;
    });
  };

  deleteContact = userId => {
    const rightContacts = this.state.contacts.filter(({ id }) => {
      return id !== userId;
    });

    this.setState({
      contacts: rightContacts,
    });
  };

  render() {
    return (
      <div className={css.mainDiv}>
        <Phonebook
          isNameAlreadyinContacts={this.isNameAlreadyinContacts}
          onClickAddContact={this.addToContacts}
        />
        <Contacts
          onDeleteContact={this.deleteContact}
          onNameFilter={this.nameFilter}
          contacts={this.contactsArrNameFilter()}
        />
      </div>
    );
  }
}
