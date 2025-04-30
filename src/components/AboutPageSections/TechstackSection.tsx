// Lib Imports.
import Link from "next/link";

// Utils.
import { techstack } from "@/utils/techstack";

// Components.
import JumpSectionButton from "../JumpSectionButton";
import SectionTitle from "../SectionTitle";

// Techstack section, used inside of About page.
export default function TechstackSection() {
  return (
    <section id="techstack" className="w-1/2 space-y-12">
      <SectionTitle>Techstack</SectionTitle>

      <ul className="flex flex-row flex-wrap gap-x-4 gap-y-2">
        {techstack.map(({ href, icon: Icon, label }) => (
          <li key={href}>
            <Link
              href={href}
              target="_blank"
              className="bg-primary flex flex-row items-center justify-center gap-2 rounded px-4 py-2 text-white"
            >
              <Icon /> {label}
            </Link>
          </li>
        ))}
      </ul>

      <JumpSectionButton id="experience" />
    </section>
  );
}
