  import React , {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
  const[isToggled, setIsToggled]=useState(false) // to give istoggled value
  const appClass = isToggled ? "App dark" : "App light"// since istoggled is false, default will be light not until click event then it goes dark

  function handleMode(){
    setIsToggled(!isToggled) 
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
