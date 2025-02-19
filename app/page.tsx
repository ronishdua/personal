import React from "react";
import { JetBrains_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { SVG_PATHS } from "./constants/icons";

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

const SocialIcon = ({ paths, href }) => (
  <a
    target='_blank'
    className='focus:ring-offset-background group rounded focus:ring-offset-2 focus:ring-1 focus:ring-primary hover:text-primary'
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
      className='size-7 transition-all hover:text-primary group-focus:text-primary'
    >
      {paths.map((d, i) => (
        <path key={i} d={d} stroke='currentColor' />
      ))}
    </svg>
  </a>
);

export default function Home() {
  return (
    <main
      className={`h-screen bg-[#1d2021] text-gray-300 p-8 md:p-16 flex flex-col ${mono.className}`}
    >
      <div className='h-full max-w-2xl mx-auto -mt-16'>
        <div className='flex h-full w-full flex-col items-center justify-center gap-20'>
          {/* Centered Header */}
          <div className='flex flex-col items-center'>
            <h1 className={`${playfair.className} text-5xl`}>Ronish Dua</h1>
          </div>

          {/* Main Text */}
          <div className='flex flex-col gap-4 text-lg text-primary'>
            <div className='leading-tight text-center'>
              Engineer based in D.C. and San Francisco. Studying Computer
              Science at the University of Virginia.
            </div>
            <div className='leading-tight text-center'>
              Currently at Chordia AI. Previously at DocuSign.
            </div>
          </div>

          {/* Social Icons */}
          <div className='flex items-center gap-4 text-secondary'>
            <SocialIcon href='https://x.com/ronishdua' paths={SVG_PATHS.x} />
            <SocialIcon
              href='https://github.com/ronishdua'
              paths={SVG_PATHS.github}
            />
            <SocialIcon
              href='https://linkedin.com/in/ronishdua'
              paths={SVG_PATHS.linkedin}
            />
            <SocialIcon
              href='mailto:ronishdua@gmail.com'
              paths={SVG_PATHS.email}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className='fixed bottom-0 left-0 right-0 p-8 md:p-16'>
        <div className='flex justify-end items-center text-sm text-gray-500'>
          <div className='flex items-center gap-2'>
            <span className='relative flex h-2 w-2'>
              <span className='absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-slow-ping'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
            </span>
            <span>Updated 2/18/2025</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
