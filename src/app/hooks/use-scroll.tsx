"use client";
import { useEffect, useState } from "react";

export const useScroll = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (
        currentScrollY > lastScrollY &&
        currentScrollY > window.innerHeight * 0.1
      ) {
        setIsVisible(false);
      } else if (
        currentScrollY < lastScrollY &&
        currentScrollY < window.innerHeight * 1
      ) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return isVisible;
};
