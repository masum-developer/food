import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext =createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    const githubLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider)
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const userProfile = (dName,pURL)=>{
        return updateProfile(auth.currentUser, {
  
  displayName: dName, photoURL: pURL
})
    }
    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth,loggedUser=>{
           // console.log('logged user inside auth',loggedUser)
            setUser(loggedUser)
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleLogin,
        githubLogin,
        logOut,
        userProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;