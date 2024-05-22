import Image from "next/image";
import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ["latin"], weight: ["200", "300", "400"] });

export const Footer = () => {
  return (
    <div className="h-[12vh] w-full flex justify-between items-center px-4 md:px-24">
      <div className="flex gap-2 items-center scale-75 md:scale-100">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
        <h1
          className={`text-2xl font-semibold ${kanit.className} text-customBlue`}
        >
          INGDATA
        </h1>
      </div>
      <div className="text-gray-700 text-xs md:text-sm">
        <p>© 2024 IngData</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
};
