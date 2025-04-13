// Lib Imports.
import Image from "next/image";

// Assets.
import Hero from "@/assets/images/hero.png";

// Landing page's hero image component.
export default function HeroImage() {
  return (
    <section className="flex h-1/2 w-full items-center justify-center overflow-hidden lg:h-full lg:w-1/2">
      <Image
        alt="Zain Khoso"
        src={Hero}
        className="shadow-primary rounded-full object-contain shadow-xl"
      />
    </section>
  );
}
