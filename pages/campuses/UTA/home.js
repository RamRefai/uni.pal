import Image from "next/image";
import Container from "../../../components/container";
function home() {
  return (
    <>
    <Container className="flex items-center justify-center">
    <h1 className="text-center text-bermuda text-3xl">Welcome to the University of Texas at Arlington, Maverick!</h1>
    <Image
              src={'/img/hero7.png'}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
      />
        </Container>
    </>
    
      
  );
}

export default home;