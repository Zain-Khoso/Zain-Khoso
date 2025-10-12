// Lib Imports.
import Link from 'next/link';

// Components.
import { Big } from '../typography';
import HamburgerMenu from './HamburgerMenu';

// This navbar is used for the entire app.
export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-8">
      <Link href="/" className="z-50">
        <Big>Zain Ul Abdin</Big>
      </Link>

      <HamburgerMenu />

      {/* Navigation */}
      <div className="hidden items-center gap-6 md:flex">
        <Link href="/about" className="hover:text-primary-light">
          About
        </Link>
        <Link href="/#portfolio" className="hover:text-primary-light">
          Portfolio
        </Link>
        <Link href="/#contact" className="hover:text-primary-light">
          Contact
        </Link>
      </div>
    </nav>
  );
}
