"use client";

import React from "react";
import { JetBrains_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { SVG_PATHS } from "./constants/icons";
import Image from "next/image";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
});

// Data structures
const workExperience = [
  {
    company: "Chordia",
    role: "Software Engineer Intern",
    description:
      "Building voice AI call analysis and knowledge base for 200+ agents",
    href: "https://www.chordia.ai",
    logo: "/images/Chordia.svg",
  },
  {
    company: "DocuSign",
    role: "Software Engineer Intern",
    description:
      "Developed a Slack bot automating sandbox management for 80 devs.",
    href: "https://www.docusign.com",
    logo: "/images/DocuSign.png",
  },
  {
    company: "RedMatter",
    role: "Software Engineer Intern",
    description: "Built a cloud subscription tracker app cutting costs by 15%.",
    href: "https://www.redmattersolutions.com",
    logo: "/images/redmatter.png",
  },
];

const projects = [
  {
    name: "Spacify (Acq.)",
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

const socialLinks = [
  { href: "https://x.com/ronishdua", paths: SVG_PATHS.x },
  { href: "https://linkedin.com/in/ronishdua", paths: SVG_PATHS.linkedin },
  { href: "https://github.com/ronishdua", paths: SVG_PATHS.github },
  { href: "mailto:ronishdua@gmail.com", paths: SVG_PATHS.email },
];

// Components
const SocialIcon = ({ paths, href }: { paths: string[]; href: string }) => (
  <a
    target='_blank'
    rel='noopener noreferrer'
    className='focus:ring-offset-background group rounded focus:ring-offset-2 focus:ring-1 focus:ring-primary hover:text-white'
    href={href}
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      stroke='currentColor'
      className='size-7 transition-all hover:text-white group-focus:text-white'
    >
      {paths.map((d: string, i: number) => (
        <path key={i} d={d} stroke='currentColor' />
      ))}
    </svg>
  </a>
);

const WorkItem = ({
  company,
  role,
  description,
  href,
  logo,
}: (typeof workExperience)[0]) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='block hover:opacity-80 transition-opacity'
  >
    <div className='mb-6 flex items-start gap-5'>
      <div className='relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0'>
        <Image
          src={logo}
          alt={company}
          fill
          className='object-cover'
          priority
        />
      </div>
      <div>
        <div className='font-semibold'>{company}</div>
        <div className='text-gray-400 text-sm'>{role}</div>
        <div className='font-semibold text-sm pl-4 space-y-1'>
          <div>• {description}</div>
        </div>
      </div>
    </div>
  </a>
);

const ProjectItem = ({
  name,
  role,
  description,
  href,
}: (typeof projects)[0]) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='block hover:opacity-80 transition-opacity'
  >
    <div className='mb-6'>
      <div>
        <div className='font-semibold'>{name}</div>
        <div className='text-gray-400 text-sm'>{role}</div>
        <div className='font-semibold text-sm pl-4 space-y-1'>
          <div>• {description}</div>
        </div>
      </div>
    </div>
  </a>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className='w-full'>
    <h2 className='font-extrabold text-2xl mb-4'>{title}</h2>
    {children}
  </div>
);

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-[#1d2021] text-gray-300 p-4 md:p-16 flex flex-col ${mono.className}`}
    >
      <div className='w-full max-w-2xl mx-auto'>
        <div className='flex w-full flex-col items-start gap-12 pt-8'>
          <h1
            className={`${playfair.className} text-6xl font-extrabold mt-8 text-center md:text-left w-full md:w-auto`}
          >
            Ronish Dua
          </h1>

          <Section title='Work'>
            {workExperience.map((work, index) => (
              <WorkItem key={index} {...work} />
            ))}
          </Section>

          <Section title='Play'>
            {projects.map((project, index) => (
              <ProjectItem key={index} {...project} />
            ))}
          </Section>

          <Section title='Education'>
            <div className='mb-6'>
              <div>
                <div className='font-semibold'>University of Virginia</div>
                <div className='text-gray-400 text-sm space-y-1'>
                  <div>Computer Science</div>
                  <div>May 2025</div>
                </div>
              </div>
            </div>
          </Section>

          <div className='flex items-center gap-4 text-secondary'>
            {socialLinks.map((social, index) => (
              <SocialIcon key={index} {...social} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
