"use client";
import Image from "next/image";
import Link from "next/link";
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
    </nav>
  );
};
