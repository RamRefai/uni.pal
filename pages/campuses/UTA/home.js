import Link from 'next/link';
import Footer from '../../../components/footer';
import Navbar from '../../../components/navbar';
import SectionTitle from '../../../components/sectionTitle';

function home() {
  return (
    <>
    <Navbar/>
      <h1 className="text-center text-bermuda text-3xl">Welcome to the University of Texas at Arlington, Maverick!</h1>
      <SectionTitle title="yoo"/>
      <Footer/>
    </>
  );
}

export default home;