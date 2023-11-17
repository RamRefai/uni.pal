import Image from "next/image";
import Container from "/components/container";
import ProtectedRoute from "/components/ProtectedRoute";
import Navbar from "/components/navbar";
import Footer from "/components/footer";
import firebase from 'firebase/app';
import { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "/utils/firebase"
import TypeIt from "typeit-react";
import heroImg4 from "/public/img/hero4.png";
import UTALogo2 from "/public/img/University_of_Texas_at_Arlington_logo.svg"
import AMLogo from "/public/img/texas-amLogo.svg"
import { useRouter } from 'next/router';

function home() {
  const router = useRouter();
  const auth = getAuth();
  const user = auth.currentUser;
  


  return (
    <>

      <ProtectedRoute>
        <div className="bg-silver">
          <Container className="flex flex-wrap">
            <div className="flex items-center w-full lg:w-1/2">
              <div className="max-w-2xl mb-8">
                <h1 className="flex text-3xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                  <span><TypeIt>Welcome to uni.<span className="text-orange dark:text-cool-orange">pal, </span>{user.displayName}
                  </TypeIt></span>
                </h1>
                <p className="py-10 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                  The University of Texas at Arlington's hub for streamlined student resources.
                  From personalized AI-driven advice to essential campus links and course diagrams,
                  your academic journey is about to get simpler. Connect with a community of Mavericks,
                  unlocking the full potential of UTA's alumni network at your fingertips.
                </p>

                <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">

                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full lg:w-1/2">
              <div className="">
                <Image
                  src="/img/UTA-logo.png"
                  width="460"
                  height="617"
                  className={"object-cover"}
                  alt="Hero Illustration"
                  loading="eager"

                />
              </div>
            </div>
          </Container>
        </div>

        <div className="bg-white">
          <Container>
            <div className="flex flex-col justify-center">
              <div className="text-xl text-center text-gray-700 dark:text-white">

              </div>

              <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">

              </div>
            </div>

            {/* BENTO BOX */}
            <div className="grid auto-rows-[192px] grid-cols-3 gap-4">
              {['Interview With Pal', 'Alumni Chatbot', 'Parking Help', 'Important Links', 'Under Construction', 'Under Construction', 'Under Construction'].map((label, i) => (
                <div
                  key={i}
                  className={`row-span-1 rounded-xl border-2 border-silver bg-cool-orange text-silver font-bold py-2 px-4 text-5xl flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer ${i === 3 || i === 6 ? "col-span-2" : ""
                    }`}
                  onClick={() => router.push('/' + label.toLowerCase().replace(/\s+/g, ''))}
                  style={{ transition: 'transform 0.5s ease, box-shadow 0.3s ease' }}
                >
                  {label}
                </div>
              ))}
            </div>


            <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">

            </div>
          </Container>
        </div>
      </ProtectedRoute>

    </>


  );
}

export default home;