import ContactCard from "./ContactCard";
import s from "./ContactsApp.module.css";

const ContactsList = ({ contacts, handleDelete }) => {
  return (
    <div>
      <ul className={s.list}>
        {contacts.map((item) => {
          return (
            <ContactCard
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

export default ContactsList;
