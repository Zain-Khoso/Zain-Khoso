"use client";

// Assets.
import HippopitchLogo from "@/assets/images/hippopitch.png";
import Hero from "@/assets/images/hero.png";

// Components.
import SectionTitle from "../SectionTitle";
import ExperienceTile from "../ExperienceTile";

// Component used inside about page to show my experiences.
export default function ExperienceSection() {
  return (
    <section className="w-1/2 space-y-16" id="experience">
      <SectionTitle>Experience</SectionTitle>

      <div>
        <ExperienceTile
          company="Hippopitch"
          companyLogo={HippopitchLogo}
          companyLink="https://hippopitch.com"
          date="2024 - Present"
          position="Fullstack Developer"
          description="I built the core functionalities of Hippopitch, mainly working with technologies like Javascript, Firebase, and Algolia."
          rightSide={false}
        />

        <ExperienceTile
          company="Freelance"
          companyLogo={Hero}
          companyLink="/"
          date="2023 - 2024"
          position="Fullstack Developer"
          description="During this starting and crucial phase of my career, I worked on multiple freelance projects, gaining valuable experience."
          rightSide={true}
        />
      </div>
    </section>
  );
}
