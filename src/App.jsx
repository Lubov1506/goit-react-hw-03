import { useEffect, useState } from "react";
import s from "./components/ContactsApp/ContactsApp.module.css";
import { nanoid } from "nanoid";
import getFormatNumber from "./components/ContactsApp/functions";
import ContactForm from "./components/ContactsApp/ContactForm";
import SearchBox from "./components/ContactsApp/SearchBox";
import ContactList from "./components/ContactsApp/ContactList";
import contactsData from "./assets/contacts";

function App() {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("saved-contacts")) || contactsData
  );
  const [searchValue, setSearchValue] = useState("");

  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };
  const handleAddContact = ({ name, number }) => {
    const formatNumber = getFormatNumber(number);
    setContacts((prev) => [
      ...prev,
      { name, number: formatNumber, id: nanoid() },
    ]);
  };
  const getSearchContacts = () =>
    contacts.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = getSearchContacts();
  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
