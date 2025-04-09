import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { setLogLevel } from "firebase/app";
import auth from "../firebase-config";
import {  GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)
const signInWithGithab = () =>{
    const githubProvider = new GithubAuthProvider()
    return signInWithPopup(auth,githubProvider)
    .then(result => {
        console.log(result);
  
     })
     .catch(error => {
      //  toast.error(error);
      console.log(error)
     })
    
     
}
const singInWhithGoogle = () =>{
  const googleProvaider = new GoogleAuthProvider()
 return signInWithPopup(auth,googleProvaider)
  .then(result => {
       console.log(result);
 
    })
    .catch(error => {
      // toast.error(error);
      console.log(error)
    })
    
  

}
  const AuthProvaider = ({children}) => {
    const [user, setUser] = useState([])
    const [loading, seLoading] = useState(true)
    const createUser = (email, password) =>{
          seLoading(true)
         return createUserWithEmailAndPassword(auth, email, password)

    }
    const singInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
      seLoading(true)
     return signOut(auth)
    }
    useEffect(()=>{
const unSubsvribe = onAuthStateChanged(auth, currentUser=>{
  setUser(currentUser)
  seLoading(false)
//   console.log('observing current user', currentUser)
})
return () =>{unSubsvribe()} 
    },[])
    const authInfo = {user, createUser,singInUser, logOut,loading,signInWithGithab,singInWhithGoogle}
  return (
  <AuthContext.Provider value={authInfo}>
{children}
  </AuthContext.Provider>
  )
}

export default AuthProvaider
AuthProvaider.propTypes={
    children:PropTypes.node
}
