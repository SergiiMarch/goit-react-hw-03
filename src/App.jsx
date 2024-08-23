import { useState } from "react";
import "./App.css";
import contactArr from "./contact.json";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [contacts, setContacs] = useState(contactArr);
  const [filter, setFilter] = useState("");
  const visibleTasks = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>PhoneBook</h1>
      <ContactForm />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList values={visibleTasks} />
    </>
  );
}

export default App;
