import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import axios from "axios";
import { useState } from 'react'
import { FirebaseError } from "firebase/app";
import { AuthProvider } from '../components/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
    </AuthProvider>
    
  );
}

export default MyApp;
