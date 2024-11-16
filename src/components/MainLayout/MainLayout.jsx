
import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import Navbar from "../Navbar/Navbar";

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext();

const MainLayout = () => {
      const [user,setUser] = useState(null);
      const [loading,setLoading] =useState(true)

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const handleGoogleLogIn = () => {
    setLoading(true)
    signInWithPopup(auth, googleProvider)
      // .then((res) => setUser(res.user));
  };
  const handleGithubLogIn = () => {
    setLoading(true)
    signInWithPopup(auth, githubProvider)
        // .then((res) => setUser(res.user));
  };
  const handleTwitterLogIn = () => {
    setLoading(true)

    signInWithPopup(auth, twitterProvider)
        // .then((res) => setUser(res.user));
  };

  const handleSignUp = (email, password) =>{
    setLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
    .then(result => console.log(result.user))
  }
  const handleSignIn = (email, password) =>{
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then(result => console.log(result.user))
  }

  const handleLogout = ()=>{
      signOut(auth)
      .then(res=> console.log(res))
  }


  useEffect(()=>{
    console.log("User State:",user)
  },[user])


  useEffect(()=>{ 
   const unsubscribed =  onAuthStateChanged(auth, (currentUser) => {
    if(currentUser){
      setUser(currentUser)
    }
    else{
      setUser(null);

    }
    setLoading(false)

      // if (user) {
      //   // User is signed in, see docs for a list of available properties
      //   // https://firebase.google.com/docs/reference/js/auth.user
      //   const uid = user.uid;
      //   // ...
      // } else {
      //   // User is signed out
      //   // ...
      // }
    });
      return ()=>{
        unsubscribed()
      }
  },[])

  const authData ={
    handleGoogleLogIn,
    handleGithubLogIn,
    handleTwitterLogIn,
    user,
    setUser,
    handleSignUp,
    handleLogout,
    handleSignIn,
    loading
  }

  return (
    <div>
      <authContext.Provider value={authData}>
         <Navbar></Navbar>
          <Outlet></Outlet>
      </authContext.Provider>
    </div>
  );
};

export default MainLayout;