import { useState } from "react";
import Logo from "../ui/Logo";
import {
  PaperAirplaneIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Button from "../ui/Button";

export default function Navbar() {
const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="">
    <nav className=" ">
      <div className="z-50 fixed sm:w-full lg:w-[84vw] lg:mx-32">
        <div className=" flex justify-between items-center h-16 lg:border rounded-2xl bg-transparent backdrop-blur-lg bg-opacity-30 ">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-16 my-12">
            {/* logo */}
            <div>
              <Logo 
              />
            </div>
            {/* primary */}
            <div className="hidden lg:flex gap-8 ">
              <a href="https://afforai.getrewardful.com/signup" target="_blank" className="">
                Affiliate
              </a>
              <a href="/">Pricing</a>
              <a href="/">Testimonials</a>
              <a href="https://help.afforai.com/en/" target="_blank">Help Center</a>
            </div>
          </div>
          {/* secondary */}
          <div className="flex gap-6">
            <div className=" xs:flex items-center gap-10">
              <div className="flex gap-2">
                <Button>Free Trial</Button>
                <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                  Free Trial
                </button>
                <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                  Free Trial
                </button>
              </div>
            </div>
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full bg-transparent backdrop-blur-lg bg-opacity-30 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-fit"
        }`}
      >
        <div className="px-8 pt-1 pb-7">
          <div className="flex flex-col gap-8 font-bold tracking-wider">
            <a href="https://afforai.getrewardful.com/signup" target="_blank" className="">
              Affiliate
            </a>
            <a href="#">Pricing</a>
            <a href="#">Testimonials</a>
            <a href="https://help.afforai.com/en/" target="_blank" >Help Center</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  );
}