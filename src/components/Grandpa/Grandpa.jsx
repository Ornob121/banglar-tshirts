import React from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Auntie from "../Auntie/Auntie";
import "./Grandpa.css";
import { createContext } from "react";
import { useState } from "react";

export const RingContext = createContext("gold");

export const MoneyContext = createContext(0);

const Grandpa = () => {
  const ring = "diamond";
  const [money, setMoney] = useState(0);
  return (
    <div className="grandpa">
      <h3>Grandpa</h3>
      <p>
        <big>Has Money: {money}</big>
      </p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <RingContext.Provider value="gold">
          <section className="flex">
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Auntie ring={ring}></Auntie>
          </section>
        </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * 1. create context
 *
 * */
