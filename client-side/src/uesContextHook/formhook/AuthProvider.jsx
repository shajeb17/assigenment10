
import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebse";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { AuthContext } from "./AuthContex";

const Provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  let [userInfo, setUserInfo] = useState();
  let [loading, setLodaing] = useState(true);

  let handleSinin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  let handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  let handleSignout = () => {
    return signOut(auth);
  };
  let handleSigninGoogle = () => {
    return signInWithPopup(auth, Provider);
  };
  let handlePasswordReste = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserInfo(currentUser);
      setLodaing(false);
    });
    return () => {
      unsubscribe();
    };
  });
  let allProvider = {
    handleSinin,
    handleRegister,
    handleSignout,
    handleSigninGoogle,
    handlePasswordReste,
    userInfo,
    loading,
  };
  return (
    <AuthContext.Provider value={allProvider}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;