"use client";

// Lib Imports.
import Image from "next/image";
import Link from "next/link";
import { useState, useLayoutEffect } from "react";
import { motion } from "motion/react";

// Utils.
import getSocialMediaHandles from "@/utils/getSocialMediaHandles";
import Label from "./Label";

// Types.
type Props = {
  links: {
    url: string;
    title: string;
  }[];
};

// HamburgerMenu component.
export default function HamburgerMenu({ links }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const socialLinks = getSocialMediaHandles();

  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const buttonSlice1Variant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };

  const buttonSlice2Variant = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const buttonSlice3Variant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };

  const menuVariants = {
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

  const pageLinkVariants = {
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
    <>
      <button
        className="relative z-50 flex h-8 w-10 cursor-pointer flex-col justify-between md:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <motion.div
          variants={buttonSlice1Variant}
          animate={isOpen ? "opened" : "closed"}
          className="h-1 w-10 origin-left rounded bg-black"
        />
        <motion.div
          variants={buttonSlice2Variant}
          animate={isOpen ? "opened" : "closed"}
          className="h-1 w-10 rounded bg-black"
        />
        <motion.div
          variants={buttonSlice3Variant}
          animate={isOpen ? "opened" : "closed"}
          className="h-1 w-10 origin-left rounded bg-black"
        />
      </button>

      {isOpen && (
        <motion.aside
          variants={menuVariants}
          initial="closed"
          animate="opened"
          className="fixed top-0 left-0 z-10 flex h-screen max-h-screen w-screen flex-col items-center justify-between bg-white md:hidden"
        >
          <header className="flex w-full flex-col items-start justify-center px-4 py-6">
            <Label />
          </header>

          <main className="w-full">
            <ul className="flex flex-col items-center justify-start gap-4">
              {links.map((link) => (
                <motion.li key={link.title} variants={pageLinkVariants}>
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
      )}
    </>
  );
}
