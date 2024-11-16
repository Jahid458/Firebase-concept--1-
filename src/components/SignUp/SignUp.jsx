import { useContext } from "react";
import { authContext } from "../MainLayout/MainLayout";





const SignUp = () => {
  const {handleSignUp} =useContext(authContext);

  const handleSubmit =(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // eslint-disable-next-line no-unused-vars
    const conPassword = e.target.conPassword.value;
    // console.log(email,password,conPassword)
    if(password.length < 6){
      alert('password must be at least 6 chareacter!')
      return
    }
    if(password!=conPassword){
      alert("pass didnot match")
      return
    }

    if(/^(?=.*[a-z])(?=.*[A-Z])(?=(.*\d){2,})(?=.*[$#@&]).+$/.test(password)){
      alert(" password not valid!")
      return;
    }
      
    handleSignUp(email,password)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
       Email<input name="email" type="text" />
       <br />
       Password<input name="password" type="text"/>
       <br />
       Confirm Password<input name="conPassword" type="text"  />
      <button  type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignUp;
