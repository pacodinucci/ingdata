import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PT_Serif, Fira_Sans } from "next/font/google";

const ptSerif = PT_Serif({ subsets: ["latin"], weight: "400" });
const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const Cards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const cardsData = [
    {
      title: "Title 1",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, distinctio.",
      image: "/seaoilpump2.png",
    },
    {
      title: "Title 2",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima cumque blanditiis quod. Quia, dicta quam.",
      image: "/yellowpump.png",
    },
    {
      title: "Title 3",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, delectus fugit.",
      image: "/barrels.png",
    },
  ];

  return (
    <div className="h-[80vh] flex flex-col gap-24 items-center pt-52">
      <h1 className={`${firaSans.className} text-4xl font-light`}>
        CUSTOMERS EXPERIENCE
      </h1>
      <motion.section
        ref={ref}
        className="h-[60vh] flex items-end gap-12 justify-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {cardsData.map((data) => (
          <motion.div
            key={data.title}
            className="relative rounded-md w-[25%] h-[20vh] flex items-center px-4 bg-gray-50 shadow-md mb-40"
            variants={cardVariants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex items-center h-full">
              <span className="h-[80%] w-[6px] rounded-md bg-customBlue" />
            </div>
            <div className="flex flex-col gap-2 px-6 py-2 items-start min-h-[20vh]">
              <h2 className="font-bold text-2xl text-slate-800">
                {data.title}
              </h2>
              <p className="text-base text-slate-900">{data.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};
