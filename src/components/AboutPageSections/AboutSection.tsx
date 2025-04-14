"use client";

// Lib Imports.
import Image from "next/image";
import { Finger_Paint } from "next/font/google";

// Assets.
import Hero from "@/assets/images/hero.png";

// Components.
import Highlighter from "../Highlighter";
import JumpSectionButton from "../JumpSectionButton";

// Font Setup.
const FontFingerPaint = Finger_Paint({ weight: "400", subsets: ["latin"] });

// Component used inside about page to show my about informartion.
export default function AboutSection() {
  return (
    <section className="w-1/2 space-y-16 pt-36">
      {/* My Picture */}
      <Image
        alt="Zain Khoso"
        src={Hero}
        className="shadow-primary aspect-square h-36 w-36 rounded-full object-cover object-center shadow-lg"
      />

      {/* About information section */}
      <article className="space-y-6">
        <h4 className="text-3xl font-bold text-black/75">Chronicle</h4>

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

      <JumpSectionButton />
    </section>
  );
}
