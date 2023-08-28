import './App.css'
import Item from './Item'
import ItemForm from './ItemForm'

import { useState } from "react"

function App() {
  const [items, setItems] = useState([
    {
      id: 0,
      text: ""
    }  
  ])

  const handleAddItem = (text) => {
    const item = {
      id: items.length,
      text 
    }

    setItems([item, ...items])
    console.log(`New Item Added: Pdt: ${text}, Pdt id: ${item.id}`)
  }

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
    console.log("Deleted Item id: ", id)
  }

  
  return (
    <div className="root-app" >
      <h1>Inventory Tracker</h1>

      <ItemForm onAddItem={handleAddItem} />

      {items.map(item => (
        <Item onDelete={handleDeleteItem} key={item.id} {...item} />
      ))}
    </div>
  )
}

export default App;