import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config"

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const signIn = (email , password) =>{
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
    }

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false)
        });

        return() =>{
            return unsubscribe();
        }
    },[])
const check = () =>{
    console.log('connected');
}
    const AuthInfo ={
        user,
        loading,
        createUser,
        signIn,
        check

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;