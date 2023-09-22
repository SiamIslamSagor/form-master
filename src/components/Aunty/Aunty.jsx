import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MonyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
  const [money, setMoney] = useContext(MonyContext);
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={"Mosfiq"}></Cousin>
        <Cousin name={"Mosfiqaa"}></Cousin>
      </section>
      <p>Money: {money}</p>
      <button onClick={() => setMoney(money + 4000)}>Add 1000 tk</button>
    </div>
  );
};

export default Aunty;