"use client";

// Lib Imports.
import Link from "next/link";
import { usePathname } from "next/navigation";

// Types.
type Props = {
  link: { title: string; url: string };
};

// NavLink component.
const NavLink = ({ link }: Props) => {
  const pathName = usePathname();

  return (
    <li>
      <Link
        className={`rounded-full px-3 py-1 font-medium text-black/70 ${
          pathName === link.url && "bg-primary text-white font-bold"
        }`}
        href={link.url}>
        {link.title}
      </Link>
    </li>
  );
};

export default NavLink;
