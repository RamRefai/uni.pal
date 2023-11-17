import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import axios from "axios";
import { useState } from 'react'
import { FirebaseError } from "firebase/app";
import { AuthProvider } from '../components/AuthContext';

function MyApp({ Component, pageProps }) {
  <script src="/node_modules/packery/dist/packery.pkgd.min.js"></script>

  return (
    <AuthProvider>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
    </AuthProvider>
    
  );
}

export default MyApp;
