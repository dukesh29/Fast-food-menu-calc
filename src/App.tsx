import React, {useState} from 'react';
import './App.css'

function App() {

  const [order, setOrder] = useState([
    {name:'Hamburger', price:110, count:0},
    {name:'Cheeseburger', price:140, count:0},
    {name:'Shawerma', price:160, count:0},
    {name:'Fries', price:50, count:0},
    {name:'Cola', price:40, count:0},
    {name:'Tea', price:20, count:0},
    {name:'Coffee', price:80, count:0},
    {name:'Salad', price:70, count:0},
  ]);



  return (
    <div className="App">
      <fieldset className="order-block">
        <legend>Order</legend>
      </fieldset>
      <fieldset className="items-block">
        <legend>Menu</legend>
      </fieldset>
    </div>
  );
}

export default App;
