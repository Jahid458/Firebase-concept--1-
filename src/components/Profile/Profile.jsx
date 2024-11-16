import { useContext } from "react";
import { authContext } from "../MainLayout/MainLayout";
// import { Navigate } from "react-router-dom";
// 33Gg$r
const Profile = () => {
  const {user} = useContext(authContext);
    console.log(user)

  // if(!user){
  //    return <Navigate to="/signin"></Navigate>
  // }
  return (
    <div>
      I am Profie
    </div>
  );
};

export default Profile;