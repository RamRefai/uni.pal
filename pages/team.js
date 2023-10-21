
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Container from '../components/container';
import Image from 'next/image';


function team() {
  return (
    <>
      <Navbar />
      <Container>
        <h1 className="text-4xl font-bold dark:text-white mb-8 flex justify-center">Meet the team</h1>
        <div className="grid grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4"
              />
              <h2 className="font-bold dark:text-white text-xl">{member.name}</h2>
              <p className="font-bold dark:text-white text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
}
const teamMembers = [
  { name: 'Ram Refai', role: 'Founder & Programmer', image: '/img/ram.png' },
  { name: 'Ann Dinh', role: 'Meow', image: '/img/ann.png' },
  { name: 'Xina Chairez', role: 'Meow', image: '/img/xina.png' },
  { name: 'Luis Tinoco', role: 'Meow', image: '/img/luis.png' },
  { name: 'Will Le', role: 'Meow', image: '/img/will.png' }]
  //

export default team;