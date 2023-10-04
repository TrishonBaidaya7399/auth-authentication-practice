import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    } 

    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }

    //get the current user by setting an observer on the Auth object:
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
            console.log('Observing current user inside useEffect of AuthProvider: ', currentUser);
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {user, createUser, signInUser, logOut, loading, signInWithGoogle};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;

/**
 * 1. Create context and export it
 * 2. set provider with value
 * 3. use the auth provider in the main.jsx file
 * 4. access  children in the authProvider component as children nd use it in the middle of the provider
 * 
 */