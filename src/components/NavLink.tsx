"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  link: { title: string; url: string };
};

const NavLink = ({ link }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded p-1 ${
        pathName === link.url && "bg-black text-white"
      }`}
      href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;
