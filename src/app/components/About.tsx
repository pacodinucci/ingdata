import Image from "next/image";
import { PT_Serif, Fira_Sans } from "next/font/google";

const ptSerif = PT_Serif({ subsets: ["latin"], weight: "400" });
const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const About = () => {
  const cards = [
    {
      title: "Titulo 1",
      description: "Descripcion de la card 1",
    },
    {
      title: "Titulo 2",
      description: "Descripcion de la card 2",
    },
    {
      title: "Titulo 3",
      description: "Descripcion de la card 3",
    },
  ];

  return (
    <section className="relative" id="about">
      <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center bg-white">
        <div className="bg-customgray h-[50%] md:h-[90%] w-full md:w-[45%] mt-8 md:mt-0 flex items-center">
          <p
            className={`text-white ${ptSerif.className} antialiased w-full md:w-[80%] text-2xl md:text-5xl px-8 md:px-12 tracking-normal leading-snug md:pb-24`}
          >
            We optimize hydrocarbon exploration and production processes.
          </p>
        </div>
        <div className="relative w-full md:w-[45%] h-full md:h-[90%]">
          <Image
            src="/oilpump2.png"
            alt="ingdata"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div
        className={`absolute top-[30%] md:top-[75%] left-[10%] w-[80%] h-auto md:h-[35%] bg-white/90 md:bg-white text-center flex items-center text-lg md:text-2xl font-semibold ${firaSans.className} py-4 md:py-20 px-8 md:px-16 text-slate-900 tracking-wide leading-snug antialiased shadow-md`}
      >
        Big Data and High Performance Computing (HPC) allow us to see beneath
        the subsurface layers and perform a comprehensive evaluation of the
        reservoirs. This enables us to develop an optimized development plan
        that reduces subsurface uncertainty and minimizes risks, thanks to the
        latest advances in computing to improve reservoir development.
      </div>
    </section>
  );
};
