// Assets.
import { FaGithub, FaLinkedinIn, FaDownload } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { TbBrandUpwork, TbBrandFiverr } from 'react-icons/tb';

// Components.
import { ButtonLink } from '@/components/button';
import { H1, H2, H3, P, ThemedLink } from '@/components/typography';

// Types.
import { Metadata } from 'next';

// Metadata.
export const metadata: Metadata = {
  title: 'About Me',
};

// Data.
const technologies: string[] = [
  'HTML',

  // Styling.
  'CSS',
  'SCSS',
  'Bootstrap',
  'Tailwind CSS',
  'Shadcn/UI',
  'Styled Components',

  // Languages.
  'JavaScript',
  'TypeScript',
  'Node.js',

  // Tools
  'Git',
  'GitHub',
  'NPM',
  'PNPM',
  'Vite',

  // Frameworks / Libraries.
  'React',
  'Redux',
  'React Query',
  'Zustand',
  'Next.js',

  // Backend / Database
  'Firebase',
  'Prisma',
  'MongoDB',

  // Others
  'Algolia',
];

// About Page.
export default function AboutPage() {
  return (
    <>
      {/* About Me Section */}
      <section className="border-secondary-dark flex flex-col gap-8 border-b-2 pb-12 md:flex-row">
        <H1 className="flex-1">About Me</H1>

        <article className="flex-2 space-y-8">
          <P>
            I&apos;m a Full-Stack Developer based in Sukkur, Pakistan, with over 1.5 years of
            professional experience building and maintaining real-world web applications. My
            expertise lies in the modern JavaScript ecosystem — particularly TypeScript, Next.js,
            Firebase, and Algolia — where I focus on crafting clean, scalable, and high-performance
            solutions.
          </P>
          <P>
            I&apos;ve worked remotely with a Sweden-based startup, contributing to the design,
            development, and deployment of production-grade software used by real clients. That
            experience strengthened my ability to write efficient, maintainable code, collaborate
            across time zones, and deliver features from concept to production with minimal
            supervision.
          </P>
          <P>
            Beyond technical skills, I&apos;m passionate about building products that solve real
            problems and provide meaningful user experiences. I enjoy taking on challenges that push
            me to learn new tools, refine my craft, and grow as a developer. When &apos; not coding,
            I like exploring new design ideas, improving my portfolio, and studying emerging web
            technologies.
          </P>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <ButtonLink
              href="/resume.pdf"
              download="Zain's Resume.pdf"
              icon={FaDownload}
              className="min-w-full md:min-w-0"
            >
              Download Resume
            </ButtonLink>

            <ButtonLink
              href="https://linkedin.com/in/zain-khoso"
              target="_blank"
              variant="icon"
              icon={FaLinkedinIn}
            ></ButtonLink>

            <ButtonLink
              href="https://github.com/Zain-Khoso"
              target="_blank"
              variant="icon"
              icon={FaGithub}
            ></ButtonLink>

            <ButtonLink
              href="https://www.fiverr.com/zainkhosodev"
              target="_blank"
              variant="icon"
              icon={TbBrandFiverr}
              iconClassName="fill-none stroke-primary"
            ></ButtonLink>

            <ButtonLink
              href="https://www.upwork.com/freelancers/~0149087552e102ee7e"
              target="_blank"
              variant="icon"
              icon={TbBrandUpwork}
              iconClassName="fill-none stroke-primary"
            ></ButtonLink>
          </div>
        </article>
      </section>

      {/* Techstack Section */}
      <section className="border-secondary-dark flex flex-col gap-8 border-b-2 pb-12 md:flex-row">
        <header className="flex-1 space-y-2">
          <H2>Tech Stack</H2>

          <P className="max-w-[480px]">
            I am well-versed in a range of technologies. With most of them I have professional
            experience.
          </P>
        </header>

        <ul className="flex flex-2 flex-wrap items-center gap-4 lg:justify-between">
          {technologies.map((technology) => (
            <li
              key={`techstack-${technology}`}
              className="border-secondary-dark hover:border-primary hover:text-primary-light cursor-default rounded-full border px-6 py-4"
            >
              {technology}
            </li>
          ))}
        </ul>
      </section>

      {/* Experience Section */}
      <section className="border-secondary-dark flex flex-col gap-8 border-b-2 pb-12 md:flex-row">
        <H1 className="flex-1">Experience</H1>

        <main className="flex-2 space-y-8">
          <article className="space-y-4">
            <header className="flex flex-col justify-between">
              <H3>Full-Stack Developer</H3>

              <span>Feb 2024 - Oct 2025</span>
            </header>

            <main className="space-y-4">
              <div className="flex gap-4">
                <ThemedLink
                  target="_blank"
                  href="https://hippopitch.com"
                  icon={FaArrowUpRightFromSquare}
                >
                  Hippopitch
                </ThemedLink>

                <ThemedLink
                  target="_blank"
                  href="https://www.linkedin.com/in/zain-khoso/details/projects/"
                  icon={FaArrowUpRightFromSquare}
                >
                  Proof of work
                </ThemedLink>
              </div>

              <P>
                At Hippopitch, I managed and developed the Hippopitch website. During my tenure
                here, I worked on and completed countless modern features. Working with technologies
                like Vite, Firebase & Algolia on a daily basis.
              </P>
            </main>
          </article>
        </main>
      </section>
    </>
  );
}
