import { useState } from "react";
import "./App.css";
import contactArr from "./contact.json";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [contacts, setContacs] = useState(contactArr);
  const [filter, setFilter] = useState(" ");
  const visibleTasks = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <p>{filter}</p>
      <h1>PhoneBook</h1>
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList values={visibleTasks} />
    </>
  );
}

export default App;
