import Contact from "./Contact";
import s from "./ContactsApp.module.css";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div>
      <ul className={s.list}>
        {contacts.map((item) => {
          return (
            <Contact
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
