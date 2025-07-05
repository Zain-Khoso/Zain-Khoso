import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// Types.
type Props = {
  position: string;
  description: string;
  date: string;
  company: string;
  rightSide: boolean;
  companyLogo: StaticImageData;
  companyLink: string;
};

// Component to display a single experience with title, description, date, and company name.
export default function ExperienceTile({
  company,
  date,
  description,
  position,
  companyLogo,
  companyLink,
  rightSide,
}: Props) {
  return (
    <article
      className={`flex h-48 justify-between ${rightSide && "flex-row-reverse"}`}
    >
      <div className="w-1/3 space-y-4">
        <Link href={companyLink} className="flex flex-row items-center gap-2">
          <Image
            alt="Hippopitch Logo"
            src={companyLogo}
            className="w-8 rounded-full object-fill object-center"
          />

          <span className="text-lg font-semibold">{company}</span>

          <span className="text-secondary text-sm font-semibold text-nowrap">
            {date}
          </span>
        </Link>

        <div className="rounded-s-lg rounded-b-lg bg-white px-4 py-2 font-semibold">
          {position}
        </div>

        <div className="text-sm italic">{description}</div>
      </div>

      <div className="flex w-1/6 justify-center">
        <div className="bg-primary relative h-full w-1 rounded">
          <div className="ring-secondary absolute -left-[200%] h-5 w-5 rounded-full bg-white ring-4"></div>
        </div>
      </div>

      <div className="w-1/3"></div>
    </article>
  );
}
