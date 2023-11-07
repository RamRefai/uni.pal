import firebase from 'firebase/app';
import { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "/utils/firebase"

function SignOutButton() {

    const auth = getAuth();

    const signOutUser = () => 
    signOut(auth).then(function() {
        console.log("Signout successful.");
      }).catch(function(error) {
        console.log("Signout unsuccessful.");
      });

    return (
        <button className="text-black dark:text-white bg-transparent" onClick={signOutUser}
        >
            Sign out
        </button>
    );
}

export default SignOutButton;