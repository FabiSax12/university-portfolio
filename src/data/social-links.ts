import { Github, Linkedin, Mail } from "lucide-astro";

export const socialLinks = [
  {
    href: "https://github.com/FabiSax12",
    icon: Github,
    label: "GitHub",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/fabian-va",
    icon: Linkedin,
    label: "LinkedIn",
    external: true,
  },
  {
    href: `mailto:fabidev18@gmail.com`,
    icon: Mail,
    label: "Email",
    external: false,
  },
];