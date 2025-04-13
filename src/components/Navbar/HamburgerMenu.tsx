"use client";

// Lib Imports.
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useLayoutEffect } from "react";
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

// Data.
const socialLinks = [
  {
    href: "https://instagram.com/zain__khoso",
    title: "instagram",
    icon: LogoInstagram,
  },
  {
    href: "https://github.com/Zain-Khoso",
    title: "Github",
    icon: LogoGithub,
  },
  {
    href: "https://linkedin.com/in/zain-khoso",
    title: "LinkedIn",
    icon: LogoLinkedIn,
  },
  {
    href: "https://x.com/Zain_Khoso_Dev",
    title: "X",
    icon: LogoX,
  },
];

// HamburgerMenu component.
export default function HamburgerMenu({ links }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const buttonSlice1Variants = useMemo(
    () => ({
      open: {
        rotate: 45,
        y: 10,
        width: "1.5rem",
      },
      closed: { rotate: 0, y: 0 },
    }),
    [],
  );

  const buttonSlice2Variants = useMemo(
    () => ({
      open: { opacity: 0 },
      closed: { opacity: 1 },
    }),
    [],
  );

  const buttonSlice3Variants = useMemo(
    () => ({
      open: {
        rotate: -45,
        y: -10,
        width: "1.5rem",
      },
      closed: { rotate: 0, y: 0 },
    }),
    [],
  );

  const hamburgerMenuVariants = useMemo(
    () => ({
      open: {
        left: 0,
      },
      closed: { left: "100dvw" },
    }),
    [],
  );

  const pageLinksVariants = useMemo(
    () => ({
      open: { x: 0 },
      closed: { x: -20 },
    }),
    [],
  );

  return (
    <>
      <button
        className="relative z-20 flex h-6 w-8 cursor-pointer flex-col items-center justify-between"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <motion.span
          variants={buttonSlice1Variants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="h-1 min-h-1 w-full rounded-lg bg-black/80"
        />
        <motion.span
          variants={buttonSlice2Variants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="h-1 min-h-1 w-full rounded-lg bg-black/80"
        />
        <motion.span
          variants={buttonSlice3Variants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          className="h-1 min-h-1 w-full rounded-lg bg-black/80"
        />
      </button>

      <motion.aside
        variants={hamburgerMenuVariants}
        transition={{ type: "spring", staggerChildren: 0.2 }}
        initial={"closed"}
        animate={isOpen ? "open" : "closed"}
        className="fixed top-0 left-0 z-10 flex h-screen max-h-screen w-screen flex-col items-center justify-between bg-white"
      >
        <header className="flex w-full flex-col items-start justify-center px-4 py-6"></header>

        <main className="w-full">
          <ul className="flex flex-col items-center justify-start gap-4">
            {links.map((link) => (
              <motion.li key={link.title} variants={pageLinksVariants}>
                <Link
                  key={link.title}
                  href={link.url}
                  className="hover:bg-primary rounded-full px-3 py-1 text-2xl font-medium text-black/70 transition duration-300 ease-in-out hover:font-bold hover:text-white"
                >
                  {link.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </main>

        <footer className="flex w-full flex-row justify-between px-8 py-4">
          {socialLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              target="_blank"
              className="hover:border-primary focus:border-primary visited:border-primary rounded-full border-2 border-transparent p-1"
            >
              <Image
                src={link.icon}
                alt={link.title}
                className="aspect-square h-8 w-8"
              />
            </Link>
          ))}
        </footer>
      </motion.aside>
    </>
  );
}
