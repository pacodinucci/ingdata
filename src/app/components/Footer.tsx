import Image from "next/image";
import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ["latin"], weight: ["200", "300", "400"] });

export const Footer = () => {
  return (
    <div className="h-[12vh] w-full flex justify-between items-center px-24">
      <div className="flex gap-2 items-center">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
        <h1
          className={`text-3xl font-semibold ${kanit.className} text-customBlue`}
        >
          INGDATA
        </h1>
      </div>
      <div>
        <p>© 2024 IngData</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
};