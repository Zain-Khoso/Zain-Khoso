// Lib Imports.
import Link from 'next/link';

// Assets.
import { FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import { TbBrandFiverr, TbBrandUpwork } from 'react-icons/tb';

// Components.
import ContactForm from './ContactForm';
import { H2, P } from '../typography';

// Footer component for the app. Also holds contact form.
export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl space-y-8 px-4 py-8 md:px-8" id="contact">
      <section className="flex flex-col gap-8 md:flex-row">
        <header className="flex-1 space-y-2">
          <H2>Let&apos;s Connect</H2>

          <P>
            Say hello at&nbsp;
            <Link
              href="mailto:zain.khoso.dev@gmail.com"
              className="text-primary-light decoration-primary underline underline-offset-[6px]"
            >
              zain.khoso.dev@gmail.com
            </Link>
          </P>

          <P>
            For more info, here&apos;s my&nbsp;
            <Link
              href="/resume.pdf"
              download="Zain's Resume.pdf"
              className="text-primary-light decoration-primary underline underline-offset-[6px]"
            >
              resume
            </Link>
          </P>

          <div className="mt-8 flex items-center gap-4 md:gap-8">
            <Link href="https://linkedin.com/in/zain-khoso" target="_blank" aria-label="LinkedIn">
              <FaLinkedinIn className="fill-primary/65 hover:fill-primary transition" size={24} />
            </Link>

            <Link href="https://github.com/Zain-Khoso" target="_blank" aria-label="Github">
              <FaGithub className="fill-primary/65 hover:fill-primary transition" size={24} />
            </Link>

            <Link href="https://www.fiverr.com/zainkhosodev" target="_blank" aria-label="Fiverr">
              <TbBrandFiverr
                className="stroke-primary/65 hover:stroke-primary fill-none transition"
                size={24}
              />
            </Link>

            <Link
              href="https://www.upwork.com/freelancers/~0149087552e102ee7e"
              target="_blank"
              aria-label="Upworks"
            >
              <TbBrandUpwork
                className="stroke-primary/65 hover:stroke-primary fill-none transition"
                size={24}
              />
            </Link>
          </div>
        </header>

        <ContactForm />
      </section>

      <P>&copy; 2025 Zain Ul Abdin</P>
    </footer>
  );
}
