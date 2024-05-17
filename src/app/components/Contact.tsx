import { useRouter } from "next/navigation";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { PT_Serif, Fira_Sans, Montserrat } from "next/font/google";

const ptSerif = PT_Serif({ subsets: ["latin"], weight: "400" });

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
});

export const Contact = () => {
  const router = useRouter();
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-blue-900/20"
      id="contact"
    >
      {/* <div>
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-lg mt-4">Contact information...</p>
        </div> */}
      <AuroraBackground className="absolute inset-0 w-full h-full">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="relative flex flex-col gap-8 items-center justify-center px-4"
        >
          <div
            className={`text-lg md:text-4xl font-bold dark:text-white text-center ${ptSerif.className}`}
          >
            Are You Ready to Take Your Production Operations to the Next Level?
          </div>
          {/* <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              And this, is chemical burn.
            </div> */}
          <button
            className={`flex justify-center items-center p-6 text-white bg-blue-500 rounded-md w-1/4 ${montserrat.className} text-xl font-semibold cursor-pointer hover:bg-slate-900 transition-colors duration-300`}
            onClick={() => router.push("/contact")}
          >
            Contact Us
          </button>
        </motion.div>
      </AuroraBackground>
    </section>
  );
};
