// Lib Imports.
import Image from "next/image";
import Link from "next/link";

// Utils.
import getSocialMediaHandles from "@/utils/getSocialMediaHandles";

// Components.
import NavLink from "./Link";
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
  const socialLinks = getSocialMediaHandles();

  return (
    <nav className="flex h-24 items-center justify-end px-4 text-xl sm:px-8 md:justify-between md:px-12 lg:px-20 2xl:px-48">
      {/* Page Links */}
      <ul className="hidden w-1/3 justify-start gap-4 md:flex">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </ul>

      {/* Social Media Links */}
      <div className="hidden w-1/3 justify-end gap-8 md:flex">
        {socialLinks.map((link) => (
          <Link key={link.title} href={link.href} target="_blank">
            <Image
              src={link.icon}
              alt={link.title}
              className="aspect-square w-8"
            />
          </Link>
        ))}
      </div>

      {/* Hamburger Menu */}
      <HamburgerMenu links={links} />
    </nav>
  );
}
