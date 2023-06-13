import { createContext, useEffect, useState} from "react";
import { app } from "../firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import axios from "axios";


export const AuthContext= createContext(null);
const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const[loader,setLoader]=useState(true);

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logInWithGoogle=()=>{
        setLoader(true);
        return signInWithPopup(auth,googleProvider);
       }

    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('current user',currentUser);

            if(currentUser){
                axios.post('http://localhost:5000/jwt',{email:currentUser.email})
                .then(data =>{
                    console.log(data.data.token)
                    localStorage.setItem('access-token', data.data.token)
                    // setLoader(false);
                })
            }else{
                localStorage.removeItem('access-token')
            }
            
        });
        return () => {
            return unsubscribe();
        }
    },[])
    const authInformation={
      user,loader,createUser,logIn,logInWithGoogle,updateUserProfile,logOut,
    }
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;