"use client";

import React from "react";
import { Inter } from "next/font/google";
import {
  workExperience,
  projects,
  personalInfo,
  socialLinks,
} from "./constants/data";
import {
  SocialIcon,
  WorkItem,
  ProjectItem,
  Section,
} from "./components/ResumeComponents";
import { BackgroundOverlay } from "./components/BackgroundOverlay";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <BackgroundOverlay />

      <main
        className={`min-h-screen px-5 py-20 ${inter.className}`}
        style={{ color: "#1b1b18", background: "#fdfdfc" }}
      >
        <div className='max-w-[500px] mx-auto flex flex-col gap-y-10'>
          <h1>{personalInfo.name}</h1>

          <p>I&apos;m a software engineer based in Washington, D.C.</p>

          <Section title='Experiences'>
            {workExperience.map((work, index) => (
              <WorkItem key={index} {...work} />
            ))}
          </Section>

          <Section title='Initiatives'>
            {projects.map((project, index) => (
              <ProjectItem key={index} {...project} />
            ))}
          </Section>

          <Section title='Connect'>
            <footer className='flex items-center gap-x-4'>
              {socialLinks.map((social, index) => (
                <SocialIcon key={index} {...social} />
              ))}
            </footer>
          </Section>
        </div>
      </main>
    </>
  );
}
