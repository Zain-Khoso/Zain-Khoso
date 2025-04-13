// Components.
import { ButtonLink } from "./Button";

// Landing page's hero context component.
export default function HeroContext() {
  return (
    <section className="flex h-1/2 flex-col items-start justify-center gap-8 lg:h-full lg:w-1/2">
      {/* Title */}
      <h1 className="text-primary text-4xl font-bold md:text-6xl">
        Zain Khoso - <br />
        Fullstack Developer
      </h1>

      {/* Description */}
      <p className="text-justify font-semibold text-black/65 md:text-xl">
        Hi! I'm Zain Khoso, a programmer skilled in creating functionality with
        stunning visuals. If you're reading this, you likely need a website for
        your startup or an existing successful business. Rest assured, you're in
        the right place. Feel free to reach out to me or learn more about my
        experience and skills. Whatever you need, I've got you covered.
      </p>

      {/* CTA */}
      <div className="flex w-full gap-4">
        <ButtonLink href="/about">Learn about me</ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Contact me
        </ButtonLink>
      </div>
    </section>
  );
}
