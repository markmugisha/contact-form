import "./App.css";
import Contact from "./Contact";
import ContactForm from "./ContactForm";

import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (name, phone) => {
    const newContact = {
      id: contacts.length + 1,
      name,
      phone,
    };

    setContacts([...contacts, newContact]);
    console.log(
      `New contact added: id: ${newContact.id}; Name: ${name}, Tel: ${phone}`
    );
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
    console.log("Deleted contact id: ", id);
  };

  return (
    <div className="root-app">
      <h1>Contact Form</h1>

      <ContactForm onAddContact={handleAddContact} />

      {contacts.map((newContact) => (
        <Contact
          onDelete={handleDeleteContact}
          key={newContact.id}
          {...newContact}
        />
      ))}
    </div>
  );
}

export default App;
