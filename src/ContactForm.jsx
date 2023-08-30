import { useState } from "react";

function ContactForm({ onAddContact }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(name, phone);
    setName("");
    setPhone("");
  };


  return (
    <form onSubmit={handleSubmit}>
      <label >Personal Details</label>
      <div>
        <input placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
          <input placeholder="Enter your phone no."
           value={phone}
           onChange={(e) => setPhone(e.target.value)}
        />

      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
}
export default ContactForm;
