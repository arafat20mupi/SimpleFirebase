import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)

const Provider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider();
    const googleLogIn =()=>{
        return signInWithPopup(auth, googleProvider)
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        });
        return () => {
            unSubscribe()
        }
    }, []);

    const authInfo = { user, setUser, createUser, signInUser,signOutUser ,googleLogIn}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default Provider;

Provider.propTypes = {
    children: PropTypes.node,

}