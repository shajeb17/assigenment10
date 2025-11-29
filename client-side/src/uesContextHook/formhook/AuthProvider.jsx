import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebaseconfig';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    let [userInfo,setUserInfo]=useState()
    let [loading,setLodaing]=useState(true)

    let handleSinin=(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password)
    }

    let handleRegister=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email,password)
    }
    let handleSignout=()=>{
        return signOut(auth)
    }
    let handleSigninGoogle=()=>{
        return signInWithPopup(auth,provider)
    }
    let handlePasswordReste=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }

    useEffect(()=>{
        let unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUserInfo(currentUser)
            setLodaing(false)
        })
        return ()=>{
            unsubscribe()
        }
    })
    let allProvider={
        handleSinin,
        handleRegister,
        handleSignout,
        handleSigninGoogle,
        handlePasswordReste,
        userInfo,
        loading
    }
    return (
    <AuthContext.Provider value={allProvider}>
         {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;