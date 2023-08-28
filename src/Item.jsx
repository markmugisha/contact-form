import { useState } from "react";

 
function Item({ id, text, onDelete}) {

  const [quantity, setQuantity] = useState(0);

  const handleIncrementQty = () => {
      setQuantity(quantity + 1)
  }

  const handleDecrementQty = () => {
    if (quantity > 0 )setQuantity(quantity-1)
      
}

  return (
    <div>
      <p>
        {`Pdt: ${text} `}
        <button className="change" onClick={handleDecrementQty}> - </button>
        {` Qty: ${quantity} (Kg) `}
        <button className="change" onClick={handleIncrementQty}> + </button>
        <button onClick={() => onDelete(id)}>Delete</button>
        </p>
    </div>
  );
}

export default Item;