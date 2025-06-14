import React from "react";
import Image from "next/image";
import { WorkExperience, Project, SocialLink } from "../constants/data";

// Animation classes
export const animations = {
  fadeInUp: "animate-[fadeInUp_0.5s_ease-out_forwards] opacity-0 translate-y-8",
  fadeInLeft:
    "animate-[fadeInLeft_0.5s_ease-out_forwards] opacity-0 -translate-x-8",
  fadeInRight:
    "animate-[fadeInRight_0.5s_ease-out_forwards] opacity-0 translate-x-8",
  scaleIn: "animate-[scaleIn_0.4s_ease-out_forwards] opacity-0 scale-95",
};

interface SocialIconProps extends SocialLink {
  index: number;
}

export const SocialIcon: React.FC<SocialIconProps> = ({
  paths,
  href,
  index,
}) => (
  <a
    target='_blank'
    rel='noopener noreferrer'
    className={`focus:ring-offset-background group rounded focus:ring-offset-2 focus:ring-1 focus:ring-primary hover:text-white transition-all duration-300 hover:scale-110 ${animations.scaleIn}`}
    style={{ animationDelay: `${1.2 + index * 0.05}s` }}
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

interface WorkItemProps extends WorkExperience {
  index: number;
}

export const WorkItem: React.FC<WorkItemProps> = ({
  company,
  role,
  description,
  href,
  logo,
  index,
}) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className={`block hover:opacity-80 transition-all duration-300 hover:translate-x-2 ${animations.fadeInLeft}`}
    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
  >
    <div className='mb-6 flex items-start gap-5'>
      <div className='relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-110'>
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

interface ProjectItemProps extends Project {
  index: number;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  role,
  description,
  href,
  index,
}) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className={`block hover:opacity-80 transition-all duration-300 hover:translate-x-2 ${animations.fadeInRight}`}
    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
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

interface SectionProps {
  title: string;
  children: React.ReactNode;
  delay: number;
}

export const Section: React.FC<SectionProps> = ({ title, children, delay }) => (
  <div
    className={`w-full ${animations.fadeInUp}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <h2 className='font-extrabold text-2xl mb-4'>{title}</h2>
    {children}
  </div>
);

interface EducationItemProps {
  institution: string;
  degree: string;
  graduationDate: string;
  delay: string;
}

export const EducationItem: React.FC<EducationItemProps> = ({
  institution,
  degree,
  graduationDate,
  delay,
}) => (
  <div
    className={`mb-6 ${animations.fadeInUp}`}
    style={{ animationDelay: delay }}
  >
    <div>
      <div className='font-semibold'>{institution}</div>
      <div className='text-gray-400 text-sm space-y-1'>
        <div>{degree}</div>
        <div>{graduationDate}</div>
      </div>
    </div>
  </div>
);
