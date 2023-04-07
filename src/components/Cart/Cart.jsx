import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = "Please Buy Something";
  } else {
    message = (
      <div>
        <h5>Boroloksxxx</h5>
        <p>Thanks for giving your money</p>
      </div>
    );
  }
  return (
    <div>
      <h2 className={cart.length === 0 ? "red" : "green"}>
        Order Summery {cart.length}
      </h2>
      <p className={`font ${cart.length === 0 ? "orange" : "blue"}`}>
        Ternary inside template string
      </p>
      {cart.length > 3 ? <p className="orange">aro kino</p> : "fokirra"}
      {message}
      {cart.length === 2 && <h3>Double Bonanja</h3>}
      {cart.length === 3 || <p>Tinta to hoilo na</p>}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

//! Conditional Rendering:

//! 1. Using If else to set a variable that will contain an element, components;

//! 2. Ternary Operator: condition ? 'isTrue' : 'false';

//! 3. Logical && : (if the condition is true than the next thing will happen);

//! 4. Logical || : (if the condition is false than the next thing will happen);

// Conditional Css Styles

// ! 1. use ternary
// ! 2. use ternary inside template string
export default Cart;
