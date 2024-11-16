import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../MainLayout/MainLayout";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {

  console.log(children)
  const {user,loading} = useContext(authContext);
  if(loading){
    return <h1>Loading......</h1>
  }
  if(!user){
    return <Navigate to='/signin'></Navigate>
  }
  return (
    <div>
      {children}
    </div>
  );
};

export default PrivateRoute;