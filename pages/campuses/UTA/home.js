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
import ChatBot from "/components/chatBot";
import InterviewBot from "/components/interviewBot";
import ThemeChanger from "/components/DarkSwitch";

function home() {
  const router = useRouter();
  const auth = getAuth();
  const user = auth.currentUser;

  const [isChatBotVisible, setChatBotVisible] = useState(false);
  const [isinterviewBotVisible, setinterviewBotVisible] = useState(false);

  const handleChatBotToggle = () => {
    setChatBotVisible(!isChatBotVisible);
  };

  const handleinterviewBotToggle = () => {
    setinterviewBotVisible(!isinterviewBotVisible);
  };

  const parkingHelpToggle = () =>{
    window.location.href = 'https://uta.modii.co';
  }


  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        <ProtectedRoute>
          <div className="fixed">
            <ThemeChanger />
          </div>

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

          <Container>
            <div className="container mx-auto p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* <!-- Interview With Pal --> */}
                <div className="bg-orange p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-white font-semibold text-center focus:ring hover:bg-ocean cursor-pointer" onClick={handleChatBotToggle}>
                  Pal Chatbot
                </div>

                {/* <!-- Alumni Chatbot --> */}
                <div className="bg-orange p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-white font-semibold text-center focus:ring hover:bg-ocean cursor-pointer" onClick={handleinterviewBotToggle}>
                  Interview with Pal
                </div>

                {/* <!-- Parking Help --> */}
                <div className="bg-orange p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-white font-semibold text-center cursor-pointer hover:bg-ocean focus:ring" onClick={parkingHelpToggle}>
                  Parking Help
                </div>

                {/* <!-- Important Links --> */}
                <div className="md:col-span-2 bg-orange p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-white font-semibold text-center cursor-pointer hover:bg-ocean focus:ring">
                  Important Links
                </div>

                {/* <!-- Under Construction (1) --> */}
                <div className="under-construction p-4 rounded-lg shadow-md text-center">
                  Under Construction
                </div>
                {/* 
              <!-- Under Construction (2) --> */}
                <div className="under-construction p-4 rounded-lg shadow-md text-center">
                  Under Construction
                </div>

                {/* <!-- Under Construction (3) --> */}
                <div class="md:col-span-2 under-construction p-4 rounded-lg shadow-md text-center">
                  Under Construction
                </div>
              </div>
            </div>
          </Container>


          <Container>
            <div className="flex flex-col justify-center margin-auto">
              <div className="text-xl text-center text-gray-700 dark:text-white">
                <ChatBot
                  isVisible={isChatBotVisible}
                  onClose={handleChatBotToggle}
                />
              </div>
              <div className="text-xl text-center text-gray-700 dark:text-white">
                <InterviewBot
                  isVisible={isinterviewBotVisible}
                  onClose={handleinterviewBotToggle} />
              </div>


            </div>
          </Container>


        </ProtectedRoute>
      </div>
    </>
  );
}

export default home;





