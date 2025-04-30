// Icons.
import LogoLinkedIn from "@/assets/icons/linkedin.svg";
import LogoInstagram from "@/assets/icons/instagram.svg";
import LogoX from "@/assets/icons/x.svg";
import LogoGithub from "@/assets/icons/github.svg";

// This is a simple react hook which is used throughout the project to list out all of my social media handles.
export default function getSocialMediaHandles() {
  return [
    {
      href: "https://instagram.com/zain__khoso",
      title: "Instagram",
      icon: LogoInstagram,
    },
    {
      href: "https://github.com/Zain-Khoso",
      title: "Github",
      icon: LogoGithub,
    },
    {
      href: "https://linkedin.com/in/zain-khoso",
      title: "LinkedIn",
      icon: LogoLinkedIn,
    },
    {
      href: "https://x.com/Zain_Khoso_Dev",
      title: "X",
      icon: LogoX,
    },
  ];
}
