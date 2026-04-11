import React from "react";
import Work from "./Work";

const ROLES = [
  {
    company: "VasLabs LTD",
    position: "Software Engineer Intern",
    period: "June 2022 - August 2022",
    description:
      "Daily training, assignments and GitHub issues, plus a personal project presentation and open-source collaboration.",
    skills: [
      "Scala",
      "Functional Programming",
      "Terraform",
      "Docker",
      "Git/GitHub",
      "Node.js",
      "TypeScript",
      "React",
      "Next.js",
      "Bash",
      "Unit Testing",
    ],
  },
  {
    company: "TIOmarkets",
    position: "Front-end Developer",
    period: "December 2022 - June 2024",
    description:
      "Restructured the company's website with modern tooling, shipped new landing pages, and collaborated closely with marketing and design.",
    skills: [
      "JavaScript",
      "React",
      "Next.js",
      "CSS",
      "Styled Components",
      "Git/GitHub",
      "Node.js",
      "Sanity",
    ],
  },
  {
    company: "Amdocs Ltd",
    position: "Software Engineer",
    period: "July 2024 - now",
    description:
      "Building and shipping responsive web interfaces in an agile team, collaborating closely with UX and backend to deliver high-quality UI. Mentoring team members, code reviews and contributing to knowledge-sharing initiatives.",
    skills: [
      "TypeScript",
      "React",
      "Redux",
      "SCSS",
      "Git",
      "GitLab",
      "Cursor",
      "MUI",
      "Tailwind CSS",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Experience
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Work
        </h2>
        <p className="mt-4 text-lg text-ink-muted">
          Roles where I&apos;ve shipped production UI and grown with the team.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {ROLES.map((role, i) => (
          <Work key={role.company} {...role} accentIndex={i} />
        ))}
      </div>
    </section>
  );
}
