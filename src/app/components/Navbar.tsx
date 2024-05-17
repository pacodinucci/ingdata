"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Kanit, Montserrat } from "next/font/google";
import { useScroll } from "../hooks/use-scroll";

const kanit = Kanit({ subsets: ["latin"], weight: ["200", "300", "400"] });
const roboto = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
});

export const Navbar = () => {
  const router = useRouter();
  const isVisible = useScroll();
  return (
    <nav
      className={`fixed w-full bg-white text-customBlue font-semibold p-2 z-20 shadow-md flex items-center justify-between transition-transform duration-300 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div
        className="flex items-center gap-4 px-8 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <h1 className={`text-2xl font-semibold ${kanit.className}`}>INGDATA</h1>
      </div>
      <ul
        className={`flex justify-end gap-12 px-12 py-8 ${roboto.className} text-lg font-medium antialiased`}
      >
        <li>
          <a
            href="#about"
            className="hover:text-slate-700"
            onClick={() => router.push("/")}
          >
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-slate-700">
            About us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-slate-700"
            onClick={() => router.push("/contact")}
          >
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
};
