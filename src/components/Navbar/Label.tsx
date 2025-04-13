// Lib Imports.
import Link from "next/link";

// Brand label in the navbar.
export default function Label() {
  return (
    <div className="z-20 md:hidden xl:flex xl:w-1/3 xl:justify-center">
      <Link
        href="/"
        className="bg-primary flex items-center justify-between gap-1 rounded-md p-2 text-sm font-semibold"
      >
        <span className="text-white">Zain</span>
        <span className="flex items-center justify-center rounded bg-white p-1 text-black">
          Khoso
        </span>
      </Link>
    </div>
  );
}
