import { useContext } from "react";
import { MonyContext } from "../Grandpa/Grandpa";

const Brother = () => {
  const [money] = useContext(MonyContext);
  return (
    <div>
      <h2>Brother</h2>
      <p>Grandpa have: {money}tk</p>
    </div>
  );
};

export default Brother;
