import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';

export const Phonebook = ({ onClickAddContact, isNameAlreadyinContacts }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.phone.value;
    document.getElementById('mainForm').reset();
    if (isNameAlreadyinContacts(name)) {
      return alert(`${name} is already in contacts`);
    }
    if (name && number) {
      onClickAddContact({
        name: name,
        number: number,
        id: nanoid(),
      });
    }
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form id="mainForm" onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input type="text" name="name" required />
        </label>

        <label>
          <span>Phone</span>
          <input type="tel" name="phone" required />
        </label>

        <button className={css.addButton} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};
