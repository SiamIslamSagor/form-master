import Friend from "../Friend/Friend";
import Spacial from "../Spacial/Spacial";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      <section>
        {asset && <Spacial asset={asset}></Spacial>}{" "}
        {name === "Sohagii" && <Friend></Friend>}
      </section>
    </div>
  );
};

export default Cousin;
