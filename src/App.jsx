// import { useState } from "react";
import "./App.css";
import contactArr from "./contact.json";
import ContactList from "./components/ContactList/ContactList";

function App() {
  // const [contacts, setContacs] = useState(contactArr);

  return (
    <>
      <h1>PhoneBook</h1>
      <ContactList values={contactArr} />
    </>
  );
}

export default App;
