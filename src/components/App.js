import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  const appClass = isDarkMode ? "App dark" : "App light"
  const btnText = isDarkMode ? "Light Mode" : "Dark Mode"

  function handleClick(event) {
    setIsDarkMode(prevValue => !prevValue)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button 
        onClick={handleClick}>{btnText}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
