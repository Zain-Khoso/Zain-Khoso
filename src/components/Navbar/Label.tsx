// Lib Imports.
import Link from "next/link";

// Brand label in the navbar.
export default function Label() {
  return (
    <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
      <Link
        href="/"
        className="text-sm bg-primary rounded-md p-2 font-semibold flex items-center justify-between gap-1">
        <span className="text-white">Zain</span>
        <span className="rounded bg-white text-black flex items-center justify-center p-1">
          Khoso
        </span>
      </Link>
    </div>
  );
}
