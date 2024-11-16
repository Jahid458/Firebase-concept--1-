import { useContext } from "react";
import { authContext } from "../MainLayout/MainLayout";
// import { Navigate } from "react-router-dom";


const About = () => {
  const {handleGoogleLogIn,setUser,user} = useContext(authContext);

  // console.log(user)

  // if(!user){
  //    return <Navigate to="/signin"></Navigate>
  // }
  return (
    <div>
      {user?.displayName}
      {user?.email}
      i am about 
      <button onClick={handleGoogleLogIn}>Login Google</button>
      <button onClick={()=>setUser("Abu Kalam")}>abc</button>
    </div>
  );
};

export default About;