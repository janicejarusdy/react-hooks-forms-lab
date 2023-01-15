import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  function handleCategoryChange(event) {
    setNewCategory(event.target.value)
  }

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name: name,
      category: newCategory
    })
  }

  const [newCategory, setNewCategory] = useState("Produce")
  const [name, setName] = useState("")

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={newCategory} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
