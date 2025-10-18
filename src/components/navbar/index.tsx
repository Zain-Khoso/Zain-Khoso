// Lib Imports.
import Link from 'next/link';

// Components.
import { Big } from '../typography';
import HamburgerMenu from './HamburgerMenu';

// Data.
const navLinks: { href: string; label: string }[] = [
  {
    href: '/#about',
    label: 'About',
  },
  {
    href: '/#portfolio',
    label: 'Portfolio',
  },
  {
    href: '/#contact',
    label: 'Contact',
  },
];

// This navbar is used for the entire app.
export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-8">
      <Link href="/" className="z-50">
        <Big>Zain Ul Abdin</Big>
      </Link>

      <HamburgerMenu navLinks={navLinks} />

      {/* Navigation */}
      <div className="hidden items-center gap-6 md:flex">
        {navLinks.map((link) => (
          <Link
            key={`NAVLINK-${link.label}`}
            href={link.href}
            className="hover:text-primary-light group flex flex-col gap-1"
          >
            {link.label}
            <span className="bg-primary transition[width] h-[1px] w-0 duration-200 ease-out group-hover:w-full"></span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
