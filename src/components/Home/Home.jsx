

import { useContext } from "react";
import { authContext } from "../MainLayout/MainLayout";

const Home = () => {
  const contexValue = useContext(authContext);
  // console.log(contexValue)

  const { handleGoogleLogIn,handleLogout,  handleGithubLogIn,handleTwitterLogIn} = contexValue;


  
  return (
    <div>
      <button onClick={handleGoogleLogIn}>Google Log In</button>
      <button onClick={handleGithubLogIn}>Github Log In</button>
      <button onClick={handleTwitterLogIn}>Twitter Log In</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
