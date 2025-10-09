// Lib Imports.
import Image from 'next/image';

// Assets.
import { FaArrowDown, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import ME from '@/assets/me.png';
import Projectarium from '@/assets/projectarium.png';
import Hippopitch from '@/assets/hippopitch.png';
import BellyBrains from '@/assets/belly-brains.png';

// Components.
import { ButtonLink } from '@/components/button';
import { H1, H2, H3, P, ThemedLink } from '@/components/typography';

// First page / Landing Page of the entire app.
export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="border-secondary-dark flex flex-col gap-8 border-b-2 pb-12">
        <article className="space-y-8">
          <H1>
            Hi, I am <br /> Zain Ul Abdin
          </H1>

          <P>
            A Full-Stack Developer with 1.5+ years of professional experience based in Sukkur,
            Pakistan.
          </P>

          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href="/#contact" icon={FaArrowDown}>
              Contact Me
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
          </div>
        </article>

        <article className="bg-secondary-light relative aspect-[9/10] w-full rounded-3xl">
          <Image alt="Zain Ul Abdin" src={ME} />
        </article>
      </section>

      {/* Portfolio Section */}
      <section className="border-secondary-dark space-y-8 border-b-2 pb-12">
        <header className="space-y-2">
          <H2>Portfolio</H2>
          <P>
            Here are some of the selected projects that showcase my passion, experience and drive
            for web development.
          </P>
        </header>

        <main className="space-y-16">
          <article className="flex flex-col gap-4">
            <div className="bg-secondary-dark grid aspect-[16/12] w-full place-items-center rounded-2xl px-4">
              <Image alt="Hippopitch Landing Page" src={Hippopitch} className="rounded" />
            </div>

            <div className="space-y-4">
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

          <article className="flex flex-col gap-4">
            <div className="bg-secondary-dark grid aspect-[16/12] w-full place-items-center rounded-2xl px-4">
              <Image alt="Projectarium Landing Page" src={Projectarium} className="rounded" />
            </div>

            <div className="space-y-4">
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

          <article className="flex flex-col gap-4">
            <div className="bg-secondary-dark grid aspect-[16/12] w-full place-items-center rounded-2xl px-4">
              <Image alt="Belly Brains Landing Page" src={BellyBrains} className="rounded" />
            </div>

            <div className="space-y-4">
              <H3>Food Ordering Service</H3>

              <P>
                Belly Brains was my first React Project. I cherish it as one of my best works, not
                because of it's functionality rather because how quickly I got a grasp of
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
      <section className="border-secondary-dark space-y-8 border-b-2 pb-12">
        <header className="space-y-2">
          <H2>About Me</H2>
          <P>
            I am a Full-Stack Developer based in Sukkur, Pakistan. I have 1.5+ Years of remote work
            experience at a Sweden based startup. In technologies like Typescript, Firebase
            ecosystem and Algolia. I excel at writing clean, readable and efficient code. Currently,
            I am exploring Node.js and Express.js.
          </P>
        </header>

        <main>
          <ThemedLink href="/about">Learn more about Me</ThemedLink>
        </main>
      </section>
    </>
  );
}
