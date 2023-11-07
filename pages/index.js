require("dotenv").config();
// import modules from OpenAI library
const OpenAI = require("openai");
import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import CampusSelection from "../components/CampusSelection";
const Home = () => {
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
      <Hero />
      <Benefits data={benefitOne} />
      <SectionTitle
        pretitle="Watch a video"
        title="To democratize access to university resources and provide a supportive alumni network for every student nationwide.">
      </SectionTitle>
      <Video />
      <SectionTitle
        title="Students have said this about uni.pal:">
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      </SectionTitle>
      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;