// Lib Imports.
import Link from "next/link";

// Icons.
import { FaArrowDown } from "react-icons/fa";

// Types.
type Props = {
  id?: string;
};

// A button component used inside about page to just between sections.
export default function JumpSectionButton({ id = "" }: Props) {
  return (
    <Link
      href={`#${id}`}
      className="block h-fit w-fit rounded-full border-2 border-black px-2 pt-3 pb-5 opacity-60"
    >
      <FaArrowDown size={20} />
    </Link>
  );
}
