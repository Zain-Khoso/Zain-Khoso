'use client';

// Lib Imports.
import Link from 'next/link';
import { useState } from 'react';

// Utils.
import { cn } from '@/utils';

// For mobile Navigation.
export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((val) => !val);

  return (
    <>
      <button className="relative z-50 h-12 w-12 p-1 md:hidden" onClick={handleToggle}>
        <span
          className={cn(
            'bg-secondary-light absolute left-1/2 h-1 w-4/5 -translate-1/2 rounded-full transition',
            isOpen ? 'top-1/2 rotate-45' : 'top-2/6 rotate-0'
          )}
        ></span>
        <span
          className={cn(
            'bg-secondary-light absolute left-1/2 h-1 w-4/5 -translate-1/2 rounded-full transition',
            isOpen ? 'top-1/2 -rotate-45' : 'top-4/6 rotate-0'
          )}
        ></span>
      </button>

      <aside
        className={cn(
          'bg-secondary-dark fixed top-0 z-40 flex h-dvh w-dvw flex-col items-center gap-[15%] transition-[right] duration-200',
          isOpen ? 'right-0' : '-right-[120%]'
        )}
      >
        {/* Placeholder element */}
        <div className="h-24 w-full"></div>

        <ul className="flex flex-col items-center gap-8">
          <li>
            <Link href="/about" className="text-xl" onClick={handleToggle}>
              About
            </Link>
          </li>
          <li>
            <Link href="/#portfolio" className="text-xl" onClick={handleToggle}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="text-xl" onClick={handleToggle}>
              Contact
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
