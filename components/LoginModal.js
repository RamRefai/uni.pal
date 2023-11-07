import firebase from 'firebase/app';
import { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../utils/firebase"
import { useRouter } from 'next/router';


function LoginModal({ isOpen, onClose }) {
    const AuthContext = createContext({
        user: null,
        loading: true,
    });

    const router = useRouter();


    if (!isOpen) return null;
    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                const email = result.user.email;

                console.log(email);
                router.push('/campuses/Landing');

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                console.log(email);
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            })



    };



    return (
        <div id="firebase-auth-container" className="xl absolute inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center margin-left-0">
            <div className="bg-white text-black dark:text-white dark:bg-black p-6 rounded-lg shadow-lg max-w-sm w-full ml-0">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Login to uni.pal</h2>
                    <button onClick={onClose}>×</button>
                </div>
                <div className="mb-4">
                    <div className="flex justify-around">
                        <h3 className="text-bermuda border-b-2 border-bermuda pb-1">More login options soon!</h3>
                    </div>
                </div>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="email" id="email" placeholder="Enter email - Admin only" className="border rounded-lg px-4 py-2 w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input type="password" id="password" placeholder="Enter password - Admin Only" className="border rounded-lg px-4 py-2 w-full" />
                    </div>
                    <div className="mb-6">
                        <button type="submit" className="bg-bermuda text-white rounded-lg px-4 py-2 w-full">Sign in</button>
                    </div>
                </form>

                <div className="border-t pt-4">
                    <div className="mb-4 text-center">
                        <a href="#" className="text-sm">New users must sign in with google</a>
                    </div>
                    {/* <span className="text-sm text-gray-500">Or connect with:</span> */}
                    <div className="flex flex-col space-y-4 mt-4">
                        {/* <button className="flex items-center justify-center border rounded-lg px-4 py-2">
                            <img src="/path-to-apple-logo.png" alt="Apple" className="h-6 mr-2" />
                            Continue with Apple
                        </button>
                        <button className="flex items-center justify-center border rounded-lg px-4 py-2">
                            <img src="/path-to-facebook-logo.png" alt="Facebook" className="h-6 mr-2" />
                            Continue with Facebook
                        </button> */}
                        <button className="flex items-center justify-center border rounded-lg px-4 py-2" onClick={signInWithGoogle}>
                            <img src="/img/google-logo.jpg" alt="Google" className="h-6 mr-2" />
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default LoginModal;