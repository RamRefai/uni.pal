import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import TypeIt from "typeit-react";
import SignOutButton from "./SignOutButton";
const Navbar = () => {
  const navigation = [
    "Features",
    "Pricing",
    "team",
  ];
  ``
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-black dark:text-white">
                    <span>
                      <Image
                        src="/img/logo.png"
                        alt="N"
                        width="80"
                        height="80"
                      />
                    </span>
                    <span>uni.<span className="text-bermuda dark:text-bermuda">pal</span></span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-bermuda focus:text-white focus:bg-bermuda focus:outline-none dark:text-bermuda dark:focus:bg-bermuda">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {/* <Link href="/Features" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-bermuda focus:text-bermuda focus:bg-transparent focus:outline-none dark:focus:bg-transparent dark:hover:text-bermuda">
                      Features
                    </Link> */}
                    <Link href="/Pricing" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-bermuda focus:text-bermuda focus:bg-transparent focus:outline-none dark:focus:bg-transparent dark:hover:text-bermuda">
                      Pricing
                    </Link>
                    
                    <Link href="https://www.buymeacoffee.com/ramrefai" target="_blank" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-bermuda focus:text-bermuda focus:bg-transparent focus:outline-none dark:focus:bg-transparent dark:hover:text-bermuda">
                      Buy us a coffee
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {/* <li className="mr-3 nav_item">
              <Link href="/Features" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-bermuda focus:text-bermuda focus:bg-transparent focus:outline-none dark:focus:bg-transparent dark:hover:text-bermuda">
                Features
              </Link>
            </li> */}
            <li className="mr-3 nav_item">
              <Link href="/Pricing" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-bermuda focus:text-bermuda focus:bg-transparent focus:outline-none dark:focus:bg-transparent dark:hover:text-bermuda">
                Pricing
              </Link>
            </li>
            
            {/* <li className="mr-3 nav_item">
              <Link href="/team" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-bermuda focus:text-bermuda focus:bg-transparent focus:outline-none dark:focus:bg-transparent dark:hover:text-bermuda">
                Meet the team
              </Link>
            </li> */}
            <li className="mr-3 nav_item">
              <Link href="https://www.buymeacoffee.com/ramrefai" target="_blank" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-bermuda focus:text-bermuda focus:bg-transparent focus:outline-none dark:focus:bg-transparent dark:hover:text-bermuda">
                Buy us a coffee
              </Link>
            </li>
          </ul>
          <SignOutButton/>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
