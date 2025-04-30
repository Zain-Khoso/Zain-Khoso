// A utility file to contain and share my techstack.

// Lib Imports.
import { IconType } from "react-icons";

// Icon Imports.
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiVite,
  SiFirebase,
  SiBootstrap,
  SiExpress,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiAlgolia,
} from "react-icons/si";

// Types.
type TechstackT = {
  href: string;
  icon: IconType;
  label: string;
}[];

export const techstack: TechstackT = [
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: SiHtml5,
    label: "HTML",
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: SiCss3,
    label: "CSS",
  },
  {
    href: "https://sass-lang.com/",
    icon: SiSass,
    label: "Sass",
  },
  {
    href: "https://tailwindcss.com/",
    icon: SiTailwindcss,
    label: "Tailwindcss",
  },
  {
    href: "https://getbootstrap.com/",
    icon: SiBootstrap,
    label: "Bootstrap",
  },
  {
    href: "https://styled-components.com/",
    icon: SiStyledcomponents,
    label: "Styled Components",
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/Javascript",
    icon: SiJavascript,
    label: "Javascript",
  },
  {
    href: "https://www.typescriptlang.org/",
    icon: SiTypescript,
    label: "Typescript",
  },
  {
    href: "https://vite.dev/",
    icon: SiVite,
    label: "Vite",
  },
  {
    href: "https://react.dev/",
    icon: SiReact,
    label: "React.js",
  },
  {
    href: "https://nextjs.org/",
    icon: SiNextdotjs,
    label: "Next.js",
  },
  {
    href: "https://expressjs.com/",
    icon: SiExpress,
    label: "Express.js",
  },
  {
    href: "https://nodejs.org/en",
    icon: SiNodedotjs,
    label: "Node.js",
  },
  {
    href: "https://www.mongodb.com/",
    icon: SiMongodb,
    label: "Mongodb",
  },
  {
    href: "https://www.postgresql.org/",
    icon: SiPostgresql,
    label: "Postgresql",
  },
  {
    href: "https://firebase.google.com/",
    icon: SiFirebase,
    label: "Firebase",
  },
  {
    href: "https://algolia.com/",
    icon: SiAlgolia,
    label: "Algolia",
  },
];
