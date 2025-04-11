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

// Components.
import NavLink from "./Link";
import Label from "./Label";

// Page links index.
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

// App's root navbar component.
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
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
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
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
    <nav className="h-24 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Page Links */}
      <ul className="hidden md:flex gap-4 w-1/3 justify-start">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </ul>

      {/* Brand Label */}
      <Label />

      {/* Social Media Links */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        <Link href="https://github.com/Zain-Khoso" target="_blank">
          <Image src={LogoGithub} alt="Github" className="w-8 aspect-square" />
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

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}>
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
