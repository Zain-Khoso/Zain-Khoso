"use client";

// Lib Imports.
import Image from "next/image";

// Assets.
import Hero from "@/assets/images/hero.png";

// Components.
import SectionTitle from "../SectionTitle";
import Highlighter from "../Highlighter";
import JumpSectionButton from "../JumpSectionButton";

// Component used inside about page to show my about informartion.
export default function AboutSection() {
  return (
    <section className="w-1/2 space-y-16">
      {/* My Picture */}
      <Image
        alt="Zain Khoso"
        src={Hero}
        className="shadow-primary aspect-square h-36 w-36 rounded-full object-cover object-center shadow-lg"
      />

      {/* About information section */}
      <article className="space-y-6">
        <SectionTitle>Chronicle</SectionTitle>

        <p className="text-justify text-lg font-semibold text-black/70">
          Hi, I'm <Highlighter>Zain ul Abdin Khoso</Highlighter>, a fullstack
          Nextjs developer based in Sukkur, Pakistan. I like to write code that
          is simple, not complex. I have built and delivered successful web
          solutions, ranging from Social Media platforms to E-commerce sites.
          These experiences have given me valuable hands-on experience with
          diverse technologies, including the robust capabilities of Firebase
          and Algolia.
        </p>
      </article>

      <JumpSectionButton id="techstack" />
    </section>
  );
}
