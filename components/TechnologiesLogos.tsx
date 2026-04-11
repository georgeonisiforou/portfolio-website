import React from "react";
import Image from "next/image";
import csslogo from "../public/assets/images/css-svgrepo-com.svg";
import gitlogo from "../public/assets/images/git-svgrepo-com.svg";
import githublogo from "../public/assets/images/github-svgrepo-com.svg";
import htmllogo from "../public/assets/images/html-svgrepo-com.svg";
import jslogo from "../public/assets/images/js-svgrepo-com.svg";
import nextjslogo from "../public/assets/images/nextjs-svgrepo-com.svg";
import nodejslogo from "../public/assets/images/nodejs-svgrepo-com.svg";
import reactlogo from "../public/assets/images/react-svgrepo-com.svg";
import tailwindlogo from "../public/assets/images/tailwindcss-svgrepo-com.svg";
import sanitylogo from "../public/assets/images/sanity-svgrepo-com.svg";
import framerlogo from "../public/assets/images/framer-svgrepo-com.svg";
import styledcomponentslogo from "../public/assets/images/styled-components-1.svg";
import typescriptLogo from "../public/assets/images/typescript-svgrepo-com.svg";

const LOGOS = [
  { src: htmllogo, label: "HTML" },
  { src: csslogo, label: "CSS" },
  { src: jslogo, label: "JavaScript" },
  { src: typescriptLogo, label: "TypeScript" },
  { src: reactlogo, label: "React" },
  { src: nextjslogo, label: "Next.js" },
  { src: nodejslogo, label: "Node.js" },
  { src: tailwindlogo, label: "Tailwind" },
  { src: styledcomponentslogo, label: "Styled Components" },
  { src: gitlogo, label: "Git" },
  { src: githublogo, label: "GitHub" },
  { src: sanitylogo, label: "Sanity" },
  { src: framerlogo, label: "Framer Motion" },
];

export default function TechnologiesLogos() {
  return (
    <section className="border-y border-slate-200/80 bg-surface-elevated py-12 sm:py-16">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-ink-muted">
          Stack I reach for most often.
        </p>
        <ul className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-6">
          {LOGOS.map(({ src, label }) => (
            <li key={label}>
              <div
                title={label}
                className="group flex aspect-square flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/50 p-3 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-card sm:p-4"
              >
                <Image
                  src={src}
                  width={48}
                  height={48}
                  alt=""
                  className="h-9 w-9 object-contain opacity-80 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0 sm:h-10 sm:w-10"
                />
                <span className="sr-only">{label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
