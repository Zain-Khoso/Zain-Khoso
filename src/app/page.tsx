// Lib Imports.
import Image from 'next/image';

// Assets.
import { FaArrowDown, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ME from '@/assets/me.png';

// Components.
import { ButtonLink } from '@/components/button';
import { H1, P } from '@/components/typography';

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
    </>
  );
}
