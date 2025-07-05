"use client";

// Lib Imports.
import { motion } from "motion/react";

// Components.
import AboutSection from "@/components/AboutPageSections/AboutSection";
import TechstackSection from "@/components/AboutPageSections/TechstackSection";
import ExperienceSection from "@/components/AboutPageSections/ExperienceSection";

// A page to contain all of my about information.
export default function AboutPage() {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="space-y-36 px-4 py-36 sm:px-8 md:px-12 lg:px-20 xl:px-48"
    >
      <AboutSection />

      <TechstackSection />

      <ExperienceSection />
    </motion.div>
  );
}
