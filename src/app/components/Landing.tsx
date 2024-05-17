import { useEffect, useState } from "react";
import { Montserrat, PT_Serif } from "next/font/google";
import { motion } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
});

const ptSerif = PT_Serif({ subsets: ["latin"], weight: "400" });

export const Landing = () => {
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

  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      className="relative h-[110vh] flex items-center justify-center text-center text-white bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(/oilcampo.png)`,
        backgroundPositionY: `${scrollY * 0.5}px`,
      }}
    >
      <motion.div
        className="relative z-10 w-1/2 flex flex-col gap-12"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.p
          className={`text-[4vh] mt-4 text-left ${ptSerif.className} text-4xl tracking-wide leading-snug antialiased`}
          variants={textVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          The goal of font pairing is to select fonts that share an overarching
          theme yet have a pleasing contrast. Which fonts work together is
          largely a matter of intuition.
        </motion.p>
        <motion.div
          className={`flex justify-center items-center p-4 bg-blue-500 rounded-md w-1/4 ${montserrat.className} text-lg font-semibold cursor-pointer hover:bg-slate-900 transition-colors duration-300`}
          variants={buttonVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Read More
        </motion.div>
      </motion.div>
      {/* <div className="absolute inset-0 bg-sky-100 opacity-50"></div> */}
    </section>
  );
};
