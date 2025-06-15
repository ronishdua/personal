import { SVG_PATHS } from "./icons";

export interface WorkExperience {
  company: string;
  role: string;
  description: string;
  href: string;
  logo: string;
  dateRange: string;
}

export interface Project {
  name: string;
  role: string;
  description: string;
  href: string;
}

export interface SocialLink {
  href: string;
  paths: string[];
}

export interface Education {
  institution: string;
  degree: string;
  graduationDate: string;
}

export const workExperience: WorkExperience[] = [
  {
    company: "Chordia",
    role: "Software Engineer Intern",
    description:
      "Building voice AI call analysis and knowledge base for 200+ agents.",
    href: "https://www.chordia.ai",
    logo: "/images/Chordia.svg",
    dateRange: "Feb. 2025 - Present",
  },
  {
    company: "DocuSign",
    role: "Software Engineer Intern",
    description:
      "Developed a Slack bot automating sandbox management for 80 devs.",
    href: "https://www.docusign.com",
    logo: "/images/DocuSign.png",
    dateRange: "May 2024 - Aug. 2024",
  },
  {
    company: "RedMatter",
    role: "Software Engineer Intern",
    description:
      "Built a tracker to optimize cloud subscriptions reducing costs by 15%.",
    href: "https://www.redmattersolutions.com",
    logo: "/images/redmatter.png",
    dateRange: "May 2023 - Aug. 2023",
  },
];

export const projects: Project[] = [
  {
    name: "Spaceify (Acquired)",
    role: "Co-Founder",
    description:
      "Created an AI powered platform automating lease analysis, expense tracing, tenant management acquired after 4 months of development",
    href: "https://spaceify.ai",
  },
  {
    name: "AceTheStreet",
    role: "Co-Founder",
    description:
      "Launched a finance interview prep tool with real questions used by thousands of students scaling to $2k MRR",
    href: "https://acethestreet.com",
  },
];

export const education: Education = {
  institution: "University of Virginia",
  degree: "Computer Science",
  graduationDate: "May 2025",
};

export const personalInfo = {
  name: "Ronish Dua",
};

export const socialLinks = [
  { href: "https://x.com/ronishdua", paths: SVG_PATHS.x },
  { href: "https://linkedin.com/in/ronishdua", paths: SVG_PATHS.linkedin },
  { href: "https://github.com/ronishdua", paths: SVG_PATHS.github },
  { href: "mailto:ronishdua@gmail.com", paths: SVG_PATHS.email },
];
