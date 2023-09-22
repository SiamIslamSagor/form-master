import Cousin from "../Cousin/Cousin";

const Uncle = ({ asset }) => {
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin asset={asset} name={"Sohag"}></Cousin>
        <Cousin name={"Sohagii"}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
