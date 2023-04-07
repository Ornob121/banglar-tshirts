import React from "react";
import Cousin from "../Cousin/Cousin";
import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Uncle</h2>
      <p>
        <small>Grandpa Money: {money}</small>
      </p>
      <button onClick={() => setMoney(money + 1000)}>Send $1000</button>
      <section className="flex">
        <Cousin>Limon</Cousin>
        <Cousin>Orin</Cousin>
      </section>
    </div>
  );
};

export default Uncle;
