// pages/index.tsx
"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import { BarChart } from "./components/BarChart";
import { Landing } from "./components/Landing";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import Image from "next/image";
import { PT_Serif, Fira_Sans } from "next/font/google";
import { Cards } from "./components/Cards";
import { AuroraBackground } from "./components/ui/aurora-background";
import { motion } from "framer-motion";
import { Contact } from "./components/Contact";

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>IngData</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      <Landing />
      <About />
      <Cards />
      <Contact />
    </div>
  );
};

export default Home;
