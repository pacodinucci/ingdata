"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const BarChart: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const barVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex space-x-4" ref={ref}>
      <motion.div
        className="w-16 bg-blue-500 origin-bottom"
        initial="hidden"
        animate={controls}
        variants={barVariants}
        style={{ height: 100 }}
      />
      <motion.div
        className="w-16 bg-green-500 origin-bottom"
        initial="hidden"
        animate={controls}
        variants={barVariants}
        style={{ height: 150 }}
      />
      <motion.div
        className="w-16 bg-red-500 origin-bottom"
        initial="hidden"
        animate={controls}
        variants={barVariants}
        style={{ height: 200 }}
      />
    </div>
  );
};
