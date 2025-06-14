"use client";

import React from "react";
import { JetBrains_Mono, Playfair_Display } from "next/font/google";
import { SVG_PATHS } from "./constants/icons";
import {
  workExperience,
  projects,
  education,
  personalInfo,
} from "./constants/data";
import {
  SocialIcon,
  WorkItem,
  ProjectItem,
  Section,
  EducationItem,
  animations,
} from "./components/ResumeComponents";
import "./styles/animations.css";

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

const socialLinks = [
  { href: "https://x.com/ronishdua", paths: SVG_PATHS.x },
  { href: "https://linkedin.com/in/ronishdua", paths: SVG_PATHS.linkedin },
  { href: "https://github.com/ronishdua", paths: SVG_PATHS.github },
  { href: "mailto:ronishdua@gmail.com", paths: SVG_PATHS.email },
];

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-[#1d2021] text-gray-300 p-4 md:p-16 flex flex-col ${mono.className}`}
    >
      <div className='w-full max-w-2xl mx-auto'>
        <div className='flex w-full flex-col items-start gap-12 pt-8'>
          <h1
            className={`${playfair.className} text-6xl font-extrabold mt-8 text-center md:text-left w-full md:w-auto ${animations.fadeInUp}`}
          >
            {personalInfo.name}
          </h1>

          <Section title='Work' delay={0.2}>
            {workExperience.map((work, index) => (
              <WorkItem key={index} {...work} index={index} />
            ))}
          </Section>

          <Section title='Play' delay={0.6}>
            {projects.map((project, index) => (
              <ProjectItem key={index} {...project} index={index} />
            ))}
          </Section>

          <Section title='Education' delay={1.0}>
            <EducationItem {...education} delay='1.1s' />
          </Section>

          <div className='flex items-center gap-4 text-secondary'>
            {socialLinks.map((social, index) => (
              <SocialIcon key={index} {...social} index={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
