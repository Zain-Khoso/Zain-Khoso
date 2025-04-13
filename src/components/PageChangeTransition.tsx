"use client";

// Lib Imports.
import { Finger_Paint } from "next/font/google";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

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
        className="from-primary/10 to-secondary/15 h-screen w-screen bg-gradient-to-b"
      >
        <motion.div
          className="fixed z-40 h-screen w-screen rounded-b-[100px] bg-amber-50"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        <motion.div
          className={`text-primary fixed top-0 right-0 bottom-0 left-0 z-50 m-auto h-fit w-fit cursor-default text-8xl ${FontFingerPaint.className}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {transitionLabel}
        </motion.div>

        <motion.div
          className="fixed bottom-0 z-30 h-screen w-screen rounded-t-[100px] bg-amber-50"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />

        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </main>
    </AnimatePresence>
  );
}
