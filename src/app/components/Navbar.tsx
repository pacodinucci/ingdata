"use client";
import Image from "next/image";
import { Kanit, Montserrat } from "next/font/google";
import { useScroll } from "../hooks/use-scroll";

const kanit = Kanit({ subsets: ["latin"], weight: ["200", "300", "400"] });
const roboto = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
});

export const Navbar = () => {
  const isVisible = useScroll();
  return (
    <nav
      className={`fixed w-full bg-white text-customBlue font-semibold p-4 z-20 shadow-md flex items-center justify-between transition-transform duration-300 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="flex items-center gap-4 px-12">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
        <h1 className={`text-3xl font-semibold ${kanit.className}`}>INGDATA</h1>
      </div>
      <ul
        className={`flex justify-end gap-12 px-12 py-8 ${roboto.className} text-xl font-medium antialiased`}
      >
        <li>
          <a href="#about" className="hover:text-slate-700">
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-slate-700">
            About us
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-slate-700">
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
};
