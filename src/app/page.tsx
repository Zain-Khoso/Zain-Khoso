"use client";

// Lib Imports.
import { motion } from "motion/react";

// Components.
import HeroImage from "@/components/HeroImage";
import HeroContext from "@/components/HeroContext";

// Landing page of the portfolio.
export default function LandingPage() {
  return (
    <motion.main
      className="flex h-full min-h-fit flex-col overflow-hidden px-4 sm:px-8 md:px-12 lg:flex-row lg:px-20 xl:px-48"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <HeroImage />

      <HeroContext />
    </motion.main>
  );
}
