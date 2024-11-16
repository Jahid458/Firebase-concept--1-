import { useContext } from "react";
import { authContext } from "../MainLayout/MainLayout";

const PH = () => {
  const contextValue = useContext(authContext);
  console.log("ph",contextValue)
  return (
    <div>
      <h2>I am pH Developer</h2>
    </div>
  );
};

export default PH;