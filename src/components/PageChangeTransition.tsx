"use client";

// Lib Imports.
import { Finger_Paint } from "next/font/google";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

// Components.
import Navbar from "./Navbar";

// Font Setup.
const FontFingerPaint = Finger_Paint({
  weight: "400",
  subsets: ["latin"],
});

// Page Switch Transition Provider Component.
export default function PageChangeTransition({ children }: ChildrenProp) {
  const pathName = usePathname()
    .substring(1)
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const transitionLabel = pathName === "" ? "Home" : pathName;

  return (
    <AnimatePresence mode="wait">
      <main
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-primary/10 to-secondary/15">
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className={`fixed m-auto top-0 bottom-0 left-0 right-0 text-primary text-8xl cursor-default z-50 w-fit h-fit ${FontFingerPaint.className}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          {transitionLabel}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>

        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </main>
    </AnimatePresence>
  );
}
