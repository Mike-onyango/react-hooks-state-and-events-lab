import React , {useState} from "react";

function Item({ name, category }) {
  const [item,setItem]= useState('')
function handleAdd(){
  setItem('in-cart')
}
  return (
    <li className={item} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd}>{item? "Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
