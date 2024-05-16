// pages/index.tsx
"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import { BarChart } from "./components/BarChart";
import { Landing } from "./components/Landing";
import { Navbar } from "./components/Navbar";
import Image from "next/image";

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
      <Navbar />
      <Landing />

      <section
        className="h-screen w-full flex items-center justify-center bg-white"
        id="about"
      >
        <div className="bg-slate-700 h-[90%] w-[45%] flex items-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aut
            adipisci exercitationem eligendi tenetur doloremque maiores sit
            doloribus earum, placeat aliquam atque neque cumque dolorum.
          </p>
        </div>
        <div className="relative w-[45%] h-[90%]">
          <Image
            src="/oilpump2.png"
            alt="ingdata"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      <section
        className="h-screen flex items-center justify-center bg-gray-100"
        id="services"
      >
        <div>
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="text-lg mt-4">Details of services offered...</p>
        </div>
      </section>

      <section
        className="h-screen flex items-center justify-center bg-white"
        id="contact"
      >
        <div>
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-lg mt-4">Contact information...</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
