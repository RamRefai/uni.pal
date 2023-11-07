import Container from "../../components/container";
import CampusSelection from "../../components/CampusSelection";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import TypeIt from "typeit-react";
import Bounce from "typeit-react";
import ProtectedRoute from '/components/ProtectedRoute';
import { useAuth } from '/components/AuthContext';


const Landing = () => {
  const { user } = useAuth();

  console.log(user);
  return (
    <>
      <ProtectedRoute>
        <Head>
          <title>uni.pal</title>
          <meta
            name="description"
            content="uni.pal is streamlining universe resources for all."
          />
          <link rel="icon" href="/img/logo.png" />
        </Head>
        <Navbar />




        <Container className="flex flex-col items-center justify-center w-full lg:w p-12">
          <TypeIt
            options={{
              strings: [
                'Please choose your campus:'], // Text to be typed
              speed: 60// Typing speed (adjust as needed)

            }}
            className="font-bold text-5xl pb-10"
          />
          <CampusSelection />
        </Container>

      </ProtectedRoute>
    </>
  );
}

export default Landing;