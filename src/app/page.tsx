// Lib Imports.
import Image from 'next/image';
import Link from 'next/link';

// Assets.
import { FaArrowDown, FaGithub, FaLinkedinIn, FaDownload } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { TbBrandUpwork, TbBrandFiverr } from 'react-icons/tb';
import ME from '@/assets/me.png';
import Projectarium from '@/assets/projectarium.png';
import Hippopitch from '@/assets/hippopitch.png';
import BellyBrains from '@/assets/belly-brains.png';

// Components.
import { ButtonLink } from '@/components/button';
import { H1, H2, H3, P, ThemedLink } from '@/components/typography';

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

  // Tools
  'Vite',
  'Git',
  'GitHub',
  'NPM',
  'PNPM',
];

// First page / Landing Page of the entire app.
export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="border-secondary-dark flex flex-col gap-8 border-b-2 pb-12 md:flex-row md:items-center">
        <article className="flex-1 space-y-8">
          <H1>
            Hi, I am <br /> Zain Ul Abdin
          </H1>

          <P>
            an individual with over 1.5 years of professional experience in web development. I have
            worked with international clients to bring their desired functionality and visuals to
            life.{' '}
            <Link
              href="https://linkedin.com/in/zain-khoso"
              target="_blank"
              className="text-primary-light decoration-primary underline underline-offset-4"
            >
              Let&apos;s connect
            </Link>{' '}
            and discuss your project!
          </P>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <ButtonLink href="#contact" icon={FaArrowDown} className="min-w-full md:min-w-0">
              Contact Me
            </ButtonLink>

            <ButtonLink
              href="https://linkedin.com/in/zain-khoso"
              target="_blank"
              variant="icon"
              icon={FaLinkedinIn}
              aria-label="LinkedIn"
            ></ButtonLink>

            <ButtonLink
              href="https://github.com/Zain-Khoso"
              target="_blank"
              variant="icon"
              icon={FaGithub}
              aria-label="Github"
            ></ButtonLink>

            <ButtonLink
              href="https://www.fiverr.com/zainkhosodev"
              target="_blank"
              variant="icon"
              icon={TbBrandFiverr}
              iconClassName="fill-none stroke-primary"
              aria-label="Fiverr"
            ></ButtonLink>

            <ButtonLink
              href="https://www.upwork.com/freelancers/~0149087552e102ee7e"
              target="_blank"
              variant="icon"
              icon={TbBrandUpwork}
              iconClassName="fill-none stroke-primary"
              aria-label="Upwork"
            ></ButtonLink>
          </div>
        </article>

        <article className="bg-secondary-light relative aspect-[9/10] w-full flex-1 rounded-3xl md:aspect-square">
          <Image
            alt="Zain Ul Abdin"
            src={ME}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 592px"
            className="max-h-full max-w-full object-contain"
          />
        </article>
      </section>

      {/* Experience Section */}
      <section className="border-secondary-dark flex flex-col gap-8 border-b-2 pb-12 md:flex-row">
        <header className="flex-1 space-y-2">
          <H2>Experience</H2>

          <P className="max-w-[480px]">
            These projects are proof that I can work in a professional environment with varying
            requirements of teams and/or clients.
          </P>
        </header>

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
                such as Javascript, Typescript, Vite & Firebase on a daily basis.
              </P>
            </main>
          </article>
        </main>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="border-secondary-dark space-y-8 border-b-2 pb-12 lg:space-y-10"
      >
        <header className="space-y-2">
          <H2>Portfolio</H2>

          <P>These projects showcase my passion, experience and drive for web development.</P>
        </header>

        <main className="space-y-16">
          <article className="flex flex-col gap-4 md:flex-row">
            <div className="bg-secondary-dark grid aspect-[16/12] w-full flex-1 place-items-center rounded-2xl px-4">
              <Image alt="Hippopitch Landing Page" src={Hippopitch} className="rounded" />
            </div>

            <div className="flex-2 space-y-4">
              <H3>A Platform Connecting Entrepreneurs & Investors</H3>

              <P>
                Hippopitch is a web platform that connects entrepreneurs with investors through
                interactive online pitch sessions. It features user authentication, profile
                management, media uploads, and real-time search powered by Algolia. The platform is
                built on Firebase, with Cloud Functions managing the backend architecture and
                deployments.
              </P>

              <ul className="space-y-2">
                <li className="border-secondary-dark border-b-2 pt-2 pb-4 font-semibold">
                  PROJECT INFO
                </li>
                <li className="border-secondary-dark flex items-center justify-between border-b-2 pt-2 pb-4">
                  <span>Year</span>
                  <span>2025</span>
                </li>
                <li className="border-secondary-dark flex items-center justify-between border-b-2 pt-2 pb-4">
                  <span>Role</span>
                  <span>Full-Stack Developer</span>
                </li>
              </ul>

              <div className="flex items-center gap-6">
                <ThemedLink
                  href="https://hippopitch.com"
                  target="_blank"
                  icon={FaArrowUpRightFromSquare}
                >
                  View the Product
                </ThemedLink>
              </div>
            </div>
          </article>

          <article className="flex flex-col gap-4 md:flex-row">
            <div className="bg-secondary-dark grid aspect-[16/12] w-full flex-1 place-items-center rounded-2xl px-4">
              <Image alt="Projectarium Landing Page" src={Projectarium} className="rounded" />
            </div>

            <div className="flex-2 space-y-4">
              <H3>A Social Platform For Developers</H3>

              <P>
                Projectarium is a platform for developers to share their latest projects and get
                feedback from more experienced developers. It is a platform built to inspire people
                to coming up with innovative ideas and/or refine their ideas.
              </P>

              <ul className="space-y-2">
                <li className="border-secondary-dark border-b-2 pt-2 pb-4 font-semibold">
                  PROJECT INFO
                </li>
                <li className="border-secondary-dark flex items-center justify-between border-b-2 pt-2 pb-4">
                  <span>Year</span>
                  <span>2024</span>
                </li>
                <li className="border-secondary-dark flex items-center justify-between border-b-2 pt-2 pb-4">
                  <span>Role</span>
                  <span>Full-Stack Developer</span>
                </li>
              </ul>

              <div className="flex items-center gap-6">
                <ThemedLink
                  href="https://projectarium.vercel.app"
                  target="_blank"
                  icon={FaArrowUpRightFromSquare}
                >
                  Live Demo
                </ThemedLink>

                <ThemedLink
                  href="https://github.com/Zain-Khoso/Projectarium"
                  target="_blank"
                  icon={FaGithub}
                >
                  Source Code
                </ThemedLink>
              </div>
            </div>
          </article>

          <article className="flex flex-col gap-4 md:flex-row">
            <div className="bg-secondary-dark grid aspect-[16/12] w-full flex-1 place-items-center rounded-2xl px-4">
              <Image alt="Belly Brains Landing Page" src={BellyBrains} className="rounded" />
            </div>

            <div className="flex-2 space-y-4">
              <H3>Food Ordering Service</H3>

              <P>
                Belly Brains was my first React Project. I cherish it as one of my best works, not
                because of it&apos;s functionality rather because how quickly I got a grasp of
                everything. Prior to Belly Brains I had never worked with React, Redux, Styled
                Components or Firebase. Yet I still managed to learn each of those along with
                completing Belly Brains in two weeks.
              </P>

              <ul className="space-y-2">
                <li className="border-secondary-dark border-b-2 pt-2 pb-4 font-semibold">
                  PROJECT INFO
                </li>
                <li className="border-secondary-dark flex items-center justify-between border-b-2 pt-2 pb-4">
                  <span>Year</span>
                  <span>2023</span>
                </li>
                <li className="border-secondary-dark flex items-center justify-between border-b-2 pt-2 pb-4">
                  <span>Role</span>
                  <span>Front-end Developer</span>
                </li>
              </ul>

              <div className="flex items-center gap-6">
                <ThemedLink
                  href="https://belly-brains.vercel.app"
                  target="_blank"
                  icon={FaArrowUpRightFromSquare}
                >
                  Live Demo
                </ThemedLink>

                <ThemedLink
                  href="https://github.com/Zain-Khoso/BellyBrains"
                  target="_blank"
                  icon={FaGithub}
                >
                  Source Code
                </ThemedLink>
              </div>
            </div>
          </article>
        </main>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="border-secondary-dark flex flex-col gap-8 border-b-2 pb-12 md:flex-row"
      >
        <header className="flex-1 space-y-2">
          <H2>About Me</H2>

          <P className="max-w-[480px]">
            I follow &quot;
            <span className="text-primary-light">
              If you can&apos;t build something with what you have just learned then, You have
              learned nothing.
            </span>
            &quot; to the heart.
          </P>
        </header>

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
            me to learn new tools, refine my craft, and grow as a developer. When I&apos;m not
            coding, I like exploring new design ideas, improving my portfolio, and studying emerging
            web technologies.
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
              aria-label="LinkedIn"
            ></ButtonLink>

            <ButtonLink
              href="https://github.com/Zain-Khoso"
              target="_blank"
              variant="icon"
              icon={FaGithub}
              aria-label="Github"
            ></ButtonLink>

            <ButtonLink
              href="https://www.fiverr.com/zainkhosodev"
              target="_blank"
              variant="icon"
              icon={TbBrandFiverr}
              iconClassName="fill-none stroke-primary"
              aria-label="Fiverr"
            ></ButtonLink>

            <ButtonLink
              href="https://www.upwork.com/freelancers/~0149087552e102ee7e"
              target="_blank"
              variant="icon"
              icon={TbBrandUpwork}
              iconClassName="fill-none stroke-primary"
              aria-label="Upwork"
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
    </>
  );
}
