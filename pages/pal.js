require('dotenv').config();
import React, { useState, useEffect } from 'react';
import OpenAI from "openai";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Container from "../components/container";
import ProtectedRoute from "/components/ProtectedRoute";

const Pal = () => {
    
    return (
        <>
            <ProtectedRoute>
                <Navbar />
                <div className="h-screen w-full flex justify-center items-center">
           
                <Chatbox/>

                </div>
                <Footer />
            </ProtectedRoute>
        </>
    );

};
export default Pal;
