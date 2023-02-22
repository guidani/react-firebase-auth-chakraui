import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase/firebase-config";

export const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [role, setRole] = useState(null);

  function logInWithEmailAndPassword(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function registerWithEmailAndPassword(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      currentUser.getIdTokenResult().then((idTokenResult) => {
        currentUser.isAdmin = idTokenResult.claims.admin
      })
    });

    

    return () => {
      unsubscriber();
      
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        
        logInWithEmailAndPassword,
        registerWithEmailAndPassword,
        logOut,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}
