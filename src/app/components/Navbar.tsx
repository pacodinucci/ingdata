"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Kanit, Montserrat } from "next/font/google";
import { useScroll } from "../hooks/use-scroll";
import { motion } from "framer-motion";

const kanit = Kanit({ subsets: ["latin"], weight: ["200", "300", "400"] });
const roboto = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
});

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isVisible = useScroll();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <nav
      className={`fixed w-full bg-white text-customBlue font-semibold p-2 z-20 shadow-md flex items-center justify-between transition-transform duration-300 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div
        className="flex items-center gap-2 md:gap-4 px-4 md:px-8 cursor-pointer z-30"
        onClick={() => router.push("/")}
      >
        <Image
          src="/logo.svg"
          alt="logo"
          width={40}
          height={40}
          className="scale-75 md:scale-100"
        />
        <h1 className={`text-2xl font-semibold ${kanit.className}`}>INGDATA</h1>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <ul
        className={`hidden md:flex justify-end gap-12 px-12 py-8 ${roboto.className} text-lg font-medium antialiased`}
      >
        <li>
          <Link href="/" className="hover:text-slate-700">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-slate-700">
            About us
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-slate-700">
            Contact us
          </Link>
        </li>
      </ul>
      <motion.div
        className="fixed top-0 left-0 w-full h-screen py-24 bg-white flex flex-col items-center justify-center z-10 md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        style={{ backgroundColor: "white" }}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul className="flex flex-col items-center gap-8">
          <li>
            <Link
              href="/"
              className="text-2xl hover:text-slate-700"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-2xl hover:text-slate-700"
              onClick={toggleMenu}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-2xl hover:text-slate-700"
              onClick={toggleMenu}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};
