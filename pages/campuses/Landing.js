import Container from "../../components/container";
import CampusSelection from "../../components/CampusSelection";
import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import TypeIt from "typeit-react";
function Landing() {
  return (
    <>
    <Head>
        <title>uni.pal</title>
        <meta
          name="description"
          content="uni.pal is streamlining universe resources for all."
        />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Navbar />
      <TypeIt
          options={{
            strings: [
              'Please choose your campus:'], // Text to be typed
            speed: 60 // Typing speed (adjust as needed)
      
          }}
          className="font-bold text-5xl flex justify-center"
        />
      <Container className="flex justify-center w-full lg:w ">
      
      <CampusSelection/>
      </Container>
      <Footer className="pt-30"/>


    </>
  );
}

export default Landing;