// Lib Imports.
import Image from "next/image";
import Link from "next/link";

// Static Assets.
import LogoLinkedIn from "@/assets/icons/linkedin.svg";
import LogoInstagram from "@/assets/icons/instagram.svg";
import LogoX from "@/assets/icons/x.svg";
import LogoGithub from "@/assets/icons/github.svg";

// Components.
import NavLink from "./Link";
import Label from "./Label";
import HamburgerMenu from "./HamburgerMenu";

// Page links index.
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

// App's root navbar component.
export default function Navbar() {
  return (
    <nav className="h-24 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 2xl:px-48 text-xl">
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

      {/* Hamburger Menu */}
      <HamburgerMenu links={links} />
    </nav>
  );
}
