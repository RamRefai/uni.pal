import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";
import heroImg5 from "../public/img/hero5.png";
const benefitOne = {
  title: "Our functions",
  desc:"Enhancing a student's experience and engagement on campus, aligning the user with the innovative spirit of uni.pal.",
  image: heroImg5,
  bullets: [
    {
      title: "Dynamic Campus Selection",
      desc: "Implementing a dynamic campus selection feature allowing users to choose their campus and get personalized resources.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Resource Categories",
      desc: "Organizing resources into clear categories such as AI Tools, Advising Help, Course Flow Diagrams, and Important Deadlines.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Newsletter Signup:",
      desc: "Offering a newsletter signup for users to stay updated on new resources, important deadlines, and other relevant information.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
