
import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [isAddToCart, setButton] = useState(false)

 function handleAddToCartButton() {
  setButton((isAddToCart) => !isAddToCart)
 }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      className={isAddToCart ? "remove" : "add"}
       onClick={handleAddToCartButton}>
        {isAddToCart ? "Remove From" : "Add To"} Cart
        </button>
    </li>
  );
}

export default Item;
