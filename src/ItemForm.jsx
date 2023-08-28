import { useState } from "react";

function ItemForm({ onAddItem }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label >New Inventory Item</label>
      <div>
        <input placeholder="Enter new item"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </div>
    </form>
  );
}
export default ItemForm;
