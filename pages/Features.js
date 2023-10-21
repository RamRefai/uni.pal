import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from "next/image";
import Container from "../components/container";
function Features() {
  return (
    <>
    
    <Navbar/>
    <Container className="flex items-center justify-center">
    <h1 className="text-center text-bermuda text-3xl font-bold">Our features:</h1>
    <Image
              src={'/img/hero7.png'}
              width="250"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
      />
    </Container>
    <Footer/>
      
    </>
  );
}

export default Features;