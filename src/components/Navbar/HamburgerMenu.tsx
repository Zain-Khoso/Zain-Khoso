"use client";
// Lib Imports.
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";

// Static Assets.
import LogoLinkedIn from "@/assets/icons/linkedin.svg";
import LogoInstagram from "@/assets/icons/instagram.svg";
import LogoX from "@/assets/icons/x.svg";
import LogoGithub from "@/assets/icons/github.svg";

// Types.
type Props = {
  links: {
    url: string;
    title: string;
  }[];
};

// HamburgerMenu component.
export default function HamburgerMenu({ links }: Props) {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 40,
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -40,
    },
  };

  const listVariants = {
    closed: {
      left: "120vw",
    },
    opened: {
      left: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="md:hidden">
      {/* Button */}
      <button
        className="w-8 h-6 flex flex-col justify-between z-50 relative"
        onClick={() => setOpen((prev) => !prev)}>
        <motion.div
          variants={topVariants}
          animate={open ? "opened" : "closed"}
          className="w-8 h-1 bg-black/70 rounded origin-left"></motion.div>
        <motion.div
          variants={centerVariants}
          animate={open ? "opened" : "closed"}
          className="w-8 h-1 bg-black/70 rounded"></motion.div>
        <motion.div
          variants={bottomVariants}
          animate={open ? "opened" : "closed"}
          className="w-8 h-1 bg-black/70 rounded origin-left"></motion.div>
      </button>

      {/* Page Links */}
      <motion.div
        variants={listVariants}
        initial="closed"
        animate={open ? "opened" : "closed"}
        className="absolute top-0 w-screen h-screen bg-white text-black flex flex-col justify-between z-40">
        <div className="flex flex-col items-center justify-center gap-8 text-4xl flex-1">
          {links.map((link) => (
            <motion.div variants={listItemVariants} key={link.title}>
              <Link href={link.url}>{link.title}</Link>
            </motion.div>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="w-full flex gap-4 justify-between items-center px-8 pb-8">
          <Link href="https://github.com/Zain-Khoso" target="_blank">
            <Image
              src={LogoGithub}
              alt="Github"
              className="w-8 aspect-square"
            />
          </Link>

          <Link href="https://linkedin.com/in/zain-khoso" target="_blank">
            <Image
              src={LogoLinkedIn}
              alt="LinkedIn"
              className="w-8 aspect-square"
            />
          </Link>

          <Link href="https://instagram.com/zain__khoso" target="_blank">
            <Image
              src={LogoInstagram}
              alt="Instagram"
              className="w-8 aspect-square"
            />
          </Link>

          <Link href="https://x.com/Zain_Khoso_Dev" target="_blank">
            <Image src={LogoX} alt="X" className="w-8 aspect-square" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
