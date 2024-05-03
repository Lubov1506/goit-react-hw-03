import { useEffect, useState } from "react";
import s from "./ContactsApp.module.css";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";
import contactsData from "../../assets/contacts";
import { nanoid } from "nanoid";
import getFormatNumber from "./functions";

const ContactsApp = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("saved-contacts")) || contactsData
  );

  const [searchValue, setSearchValue] = useState(
    () => JSON.parse(window.localStorage.getItem("search-query")) || ""
  );

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
  useEffect(() => {
    window.localStorage.setItem("search-query", JSON.stringify(searchValue));
  }, [searchValue]);

  const filteredContacts = getSearchContacts();
  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
};

export default ContactsApp;
