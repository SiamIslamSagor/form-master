import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Spacial = ({ asset }) => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h2>Mom</h2>
      <p>I send the {asset} grandpa to my mom</p>
      <p>has: {gift}</p>
    </div>
  );
};

export default Spacial;
