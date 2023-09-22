import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const AssetContext = createContext("Daimond");
export const MonyContext = createContext(20000);

const Grandpa = () => {
  const asset = "gold";
  const [money, setMoney] = useState(10000);

  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Net Mony: {money}</p>
      <MonyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="Daimond">
          <section className=" flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MonyContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * 1. Create a context and export it
 * 2. Add provider for the context with a value could be anything like(string, function, object, array etc.).
 * 3. useContext to access value in the context API
 */
