"use client";

// Lib Imports.
import { motion } from "motion/react";

// Components.
import AboutSection from "@/components/AboutPageSections/AboutSection";

// A page to contain all of my about information.
export default function AboutPage() {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="flex h-full min-h-fit flex-row justify-start px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
    >
      <AboutSection />
    </motion.div>
  );
}
