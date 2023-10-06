import css from './Contacts.module.css';

export const Contacts = ({ contacts, onNameFilter, onDeleteContact }) => {
  return (
    <>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <input
        onChange={evt => {
          onNameFilter(evt.currentTarget.value);
        }}
        type="text"
      />
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
           <p>{name}: {number}</p> 
            <button
              className={css.deleteButton}
              onClick={() => onDeleteContact(id)}
              type="button"
            >
              Delete contact
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
