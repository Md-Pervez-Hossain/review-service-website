import React from "react";
import { createContext } from "react";
import app from "../AuthConfig/AuthConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // updateProfile
  const updateUserProfile = (username, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photoURL,
    });
  };
  // user Sign in
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign in With Google
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // user logout
  const logOut = () => {
    return signOut(auth);
  };
  //catch user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unSubscribe;
  }, []);

  const authInfo = {
    user,
    createUser,
    updateUserProfile,
    logOut,
    userLogin,
    googleSignIn,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
