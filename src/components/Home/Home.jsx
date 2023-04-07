import React from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Header/Tshirt/Tshirt";
import "./Home.css";
import Cart from "../Cart/Cart";
import { useState } from "react";
import toast from "react-hot-toast";
const notify = () => toast("Already added to cart");

const Home = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
    const exist = cart.find((ts) => ts._id === tshirt._id);
    if (exist) {
      notify();
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  const handleRemoveFromCart = (id) => {
    const afterRemoveCart = cart.filter((ts) => ts._id !== id);
    setCart(afterRemoveCart);
  };

  const tshirts = useLoaderData();
  return (
    <div className="home-container">
      <div className="t-shirts-container">
        {tshirts.map((tshirt) => (
          <Tshirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
