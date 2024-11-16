import { useContext } from "react";
import { authContext } from "../MainLayout/MainLayout";
import { NavLink } from "react-router-dom";


const Login = () => {

  const {handleSignIn} = useContext(authContext);

  const handleSubmit =(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    handleSignIn(email,password)

  }
  //kbn4@gmail.com
  //11Aa!r
  return (
    <div>
    <form onSubmit={handleSubmit} action="">
     Email<input name="email" type="text" />
     <br />
     Password<input name="password" type="text"/>
    <br />
    <button  type="submit">Signin</button>
    </form>
    <NavLink to="/signUp">SignUp</NavLink>
  </div> 
  );
};

export default Login;