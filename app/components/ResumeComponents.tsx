import React from "react";
import Image from "next/image";
import { WorkExperience, Project, SocialLink } from "../constants/data";

export const SocialIcon: React.FC<SocialLink> = ({ paths, href }) => (
  <a
    target='_blank'
    rel='noopener noreferrer'
    className='hover:opacity-70'
    href={href}
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      stroke='currentColor'
    >
      {paths.map((d: string, i: number) => (
        <path key={i} d={d} stroke='currentColor' />
      ))}
    </svg>
  </a>
);

interface WorkItemProps extends WorkExperience {
  dateRange: string;
}

export const WorkItem: React.FC<WorkItemProps> = ({
  company,
  role,
  description,
  logo,
  dateRange,
}) => (
  <div className='mb-6'>
    <div className='flex items-start gap-3'>
      <div className='relative w-6 h-6 rounded overflow-hidden flex-shrink-0'>
        <Image
          src={logo}
          alt={company}
          fill
          className='object-cover'
          priority
        />
      </div>
      <div className='flex-1'>
        <div className='flex items-center gap-2'>
          <h3>{company}</h3>
          <span className='opacity-50 text-sm  font-light'>{dateRange}</span>
        </div>
        <p className='mt-2 opacity-50 font-light'>{role}</p>
        <p className='mt-1 opacity-80'>{description}</p>
      </div>
    </div>
  </div>
);

export const ProjectItem: React.FC<Project> = ({ name, role, description }) => (
  <div className='mb-6'>
    <h3>{name}</h3>
    <p className='mt-2 opacity-50 font-light'>{role}</p>
    <p className='mt-1 opacity-75 font-light'>{description}</p>
  </div>
);

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div>
    <h2 className='mb-4'>{title}</h2>
    {children}
  </div>
);
