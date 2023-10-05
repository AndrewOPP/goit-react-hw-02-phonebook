import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';
export const Phonebook = ({ onClickAddContact, isNameAlreadyinContacts }) => {
  let name;
  let number;
  return (
    <>
      <h2>Phonebook</h2>
      <div>
        <h4>Name</h4>
        <input
          id="nameInput"
          type="text"
          name="name"
          required
          onChange={evt => {
            name = evt.currentTarget.value;
          }}
        />
        <h4>Phone</h4>
        <input
          id="phoneInput"
          type="tel"
          name="phone"
          required
          onChange={evt => {
            number = evt.currentTarget.value;
          }}
        />
        <button
          className={css.addButton}
          onClick={() => {
            if (isNameAlreadyinContacts(name)) {
              document.getElementById('nameInput').value = '';
              document.getElementById('phoneInput').value = '';
              return alert(`${name} is already in contacts`);
            }
            if (name && number) {
              onClickAddContact({
                name: name,
                number: number,
                id: nanoid(),
              });
              document.getElementById('nameInput').value = '';
              document.getElementById('phoneInput').value = '';
            }
          }}
          type="button"
        >
          Add contact
        </button>
      </div>
    </>
  );
};
