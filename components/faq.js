import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-bermuda focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-bermuda`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How do I select my campus on uni.pal?",
    answer: "After landing on our homepage, you'll find a button to get started that will lead you to campus selection dropdown. Simply choose your campus from the list to personalize your experience.",
  },
  {
    question: "What kind of resources does uni.pal provide?",
    answer: "We're currently planning to provide a variety of resources including AI-driven interview preparation, course flow diagrams, advising assistance, and crucial links for campus-specific and nationwide deadlines like FAFSA.",
  },
  {
    question: "How does the AI chatbot Pal assist me?",
    answer:
      "Pal, powered by alumni insights from your chosen campus, provides personalized advice, answers your questions, and guides you through university resources to help achieve your academic and career goals.",
  },
  {
    question: "How can I stay updated with new resources and important deadlines?",
    answer:
      "You can sign up for our newsletter to receive updates on new resources, upcoming deadlines, and other essential information tailored to your university.",
  },
];

export default Faq;